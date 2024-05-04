import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule, // Import the progress spinner module here
    HttpClientModule, // Added to enable HTTP calls within this component
    MatSnackBarModule // Added for displaying snack bar messages
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  isLoading = false; // Manage loading state for the button
  contactForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.http.post('http://localhost:8000/api/contact', this.contactForm.value)
        .pipe(
          catchError(error => {
            this.snackBar.open('Failed to submit form: ' + error.message, 'Close', { duration: 3000 });
            this.isLoading = false;
            return of(null); // Handle HTTP errors and return an observable
          })
        )
        .subscribe(response => {
          if (response) {
            this.snackBar.open('Form submitted successfully!', 'Close', { duration: 3000 });
          }
          this.isLoading = false;
        });
    } else {
      this.snackBar.open('Please fill out all fields correctly!', 'Close', { duration: 3000 });
    }
  }
}
