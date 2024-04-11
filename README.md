In This repository , I have provided a solution to the problem of BigONotation 
Question 1:
Objective: Create a web application using React with React Hook Form to do the following:
1. Two-Step Form: Your app should have two pages, each with its own form.
2. Form Validation: Each form should check for errors before submission.
3. First Step User Info: The first form should gather user information like first name, last name, parent
names, phone number, email, and address.
4. Error Display: If any input is not valid when clicking &quot;Next,&quot; the transition to the next step should be
prevented. Error messages should appear below the relevant fields if any input is incorrect.
5. Navigation: Users can move to the second step using a &quot;Next Step&quot; button or a stepper component.
When they reach the second step, the data they&#39;ve entered in both steps should be saved.
6. Second Step Family Info: The second step should let users add family members. Initially, one form
is shown, but users can add more with an &quot;Add More Family Member&quot; button. Each family member
form should be collapsible, allowing users to fill them out individually.
7. Removing Family Members: Users can remove family member forms, but at least one form must
always be present.
8. Result : If every step is valid, the information that has been filled out should be displayed on the
screen. After that, a success message should be shown.
9. Code Reusability: Make sure to use React Hook Form effectively to keep your code reusable and
efficient.

implementation  details:
I have created two components - UserForm and FamilyMemberForm . Both are functional components which make use of useForm hook from react-hook-form
I have created a functional component called "UserForm" which handles the first page of the form (user info). It uses React hooks -
I have created a functional component called App which contains all the necessary logic for this task. It uses the useForm hook from react-hook-
I have created two components - UserForm and FamilyMemberForm . Both are functional components which utilize the useForm hook from react-hook-
I have created two components - UserForm and FamilyMemberForm . Both are functional components which utilize useFieldArray from react hook form library to
I have created two components - "UserInfo" and "FamilyMember". Both are functional components which make use of React Hook Form library. They
I have created two components - UserForm and FamilyMemberForm . Both these components are functional components
I have created a functional component called App which wraps around all other components. It uses the useForm hook from react-hook-form library
I have created two components - UserForm and FamilyMemberForm . Both these components are functional components
I have created two components - UserForm and FamilyMemberForm . Both are functional components which utilize React Hook Form library to handle form validation.