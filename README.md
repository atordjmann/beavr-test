# BEAVR Front-end test

I chose to code this test with the React framework, more precisely Next.js framework.
I've tried to keep the code as simple as possible, with as few dependencies as possible. 

As I didn't code an API, this is only a front-end application. So the data is never persisted, and only contained in the states of the components. **If you refresh your page, you will lose your data.**

## Getting Started

To run the code locally, you need to run the following command to install the dependencies :

```bash
npm i
# or (depending on your package manager)
yarn i
```
then, you can run the application with :
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Associated user stories
### Display policy details
You need to display the policy detail composed by: the description, the time sensitivity & recurrence and an input containing additionnal information (cf Figma).

At the top of the page you have a header containing the title of the policy and a button "Close" to go back.

### Display policy version creation card
You need to display a policy version creation card (cf Figma). This card contains two options options:
- one that allows you to create a version from scratch
- one that allows you to create a version with a template
A policy version is an object composed by:
- a title (string)
- a content (string)
- a property that says if the version is a draft (boolean)
- a date of creation (date)

The title and the content are mandatory. The draft property is `true` when it was just created.

When you click on the button "Start", it opens a modal containing an input for the title, a textarea for the content and two buttons (Save / Cancel). If you create a version from scratch, the fields are empty. Otherwise they are already filled with a template data.

When you save the version, a new card is added to the list of versions (on the top).

### Display policy versions
For each policy version created, you need to display a card containing (cf Figma):
- the title of the version
- a button that will "Approve" a version if it's a draft, or will allow you to view the detail of the version. 
- a dropdown with two options: an option to delete the version and an option to download the detail of the version.

To approve a version, it must be in draft. When it's approved, it means that the property draft is false.

To view the version, when you click on the button "View", it opens a modal that shows the title and the content.

The button "Delete" delete the version, the associated card is removed from the list.

The button "Download" allows the user to download a `.txt` file contening the title and the content.

In the header, a button allows you to reset the policy: it will delete all the versions.