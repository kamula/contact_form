# Contact Form FrontEnd Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6. It utilizes Angular Material for UI components.

## Libraries Used

- **Angular Material**: Provides a range of UI components that are aesthetically pleasing and conform to Material Design principles.

## Prerequisites

Before you begin, ensure you have the latest version of [Node.js](https://nodejs.org/) installed which includes npm (Node Package Manager). This will be used to run the development server and install dependencies.

### Backend Service

Make sure the backend service is already running before you start this application. The frontend relies on the backend for all data management tasks. You can find the backend repository and setup instructions here: [Backend Repository](https://github.com/kamula/contact_form_backend.git)

## Cloning the Repository

To get started with this project, you first need to clone the repository to your local machine. You can do this by running the following command in your terminal:

```bash
git clone https://github.com/kamula/contact_form.git
cd contact_form
```

## Installation

After cloning the repository, navigate to the project directory and install the dependencies:

```bash
npm install
```

This command will install all the necessary dependencies required to run the application.

## Development Server

To start the development server, run:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your web browser. The application will automatically reload if you change any of the source files.

## Configuring API Endpoint

If your backend service is running on a different port or host, make sure to update the `apiUrl` in the `environments/environment.ts` and `environments/environment.prod.ts` files accordingly to ensure the frontend can communicate with the backend effectively.

## Form Validation and User Feedback

The contact form uses Angular's reactive form approach for validation:
- **Required Fields**: Each field (Full Name, Email, Message) is marked as required.
- **Email Validation**: The email field is validated for standard email format.
- **Visual Feedback**: Angular Material inputs display validation errors to the user as they interact with the form.

### Loading State and Response Alerts

- **Loading Indicator**: Upon submission, a loading spinner indicates that the form is processing.
- **Success and Error Handling**: On successful form submission, a confirmation message is displayed. If an error occurs, a snack bar shows an error message detailing the failure.

## Build

To build the project for production, run:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running Unit Tests

Execute the unit tests via [Karma](https://karma-runner.github.io) by running:

```bash
ng test
```

## Running End-to-End Tests

Execute the end-to-end tests by running:

```bash
ng e2e
```

## Additional Information

For further details on configuring the application or deploying it to a live server, refer to the official [Angular CLI documentation](https://angular.io/cli).
