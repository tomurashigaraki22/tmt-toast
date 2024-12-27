# Toast Library Documentation

This guide will help you understand how to install, configure, and use the Toast Library in your React projects. The Toast Library is a lightweight notification system that supports different types of messages such as success, error, and informational toasts with shadow effects and icons.

---

## **Introduction**

The Toast Library provides an easy-to-use solution for adding dynamic notifications to your React applications. Notifications are displayed with appropriate icons and styled for better user experience. The library supports:

1. Success messages with a green tick icon.
2. Error messages with a red cross icon.
3. Informational messages with a blue info icon.

---

## **Installation**

To get started, you need to install the Toast Library via npm. Run the following command in your project directory to install the library:

1. Ensure you have a React project set up using tools like Vite or Create React App.
2. Run the installation command for the Toast Library from npm.

---

## **Setup**

Once installed, you need to configure your application to use the Toast Library. This involves wrapping your application's root component with the `ToastProvider`. The `ToastProvider` is responsible for managing the notifications and displaying them when triggered.

Add the ToastProvider to the highest level of your React component tree, typically in the main entry point of your application.

---

## **Using the Library**

To display notifications, the library provides a custom hook called `useToast`. This hook allows you to trigger toasts from any component in your application. Follow these steps to use the toast functionality:

1. Import the `useToast` hook into your desired component.
2. Call the `addToast` function from the hook, passing the message and type of notification you want to display.
3. Use predefined types like `success`, `error`, or `info` to style the notification appropriately.

---

## **Features**

1. **Success Toast**: Displays a green tick icon with the message for positive feedback or confirmation.
2. **Error Toast**: Displays a red cross icon with the message for error or failure.
3. **Info Toast**: Displays a blue info icon with the message for general information.

Toasts automatically disappear after a few seconds and include a subtle shadow for visual enhancement.

---

## **Customizing the Appearance**

The Toast Library uses default styles for icons and shadows. You can override these styles by customizing the CSS in your project. Update the container's position, colors, or animation effects as per your application design.

---

## **Publishing Updates**

If you make any changes to the Toast Library or extend its features, you can update it for your team or the public. Follow these steps:

1. Build the library using your build toolchain.
2. Publish the changes to npm using your npm account.

---

## **Support**

For questions or issues with the Toast Library, please raise a concern on the official repository or reach out to the maintainer's email provided during the installation process.

---

By following this guide, you’ll be able to integrate and use the Toast Library effectively in your React applications. Enjoy building dynamic and user-friendly notifications for your project!
