![](https://i.ibb.co/QNgD1P6/guide-logo.png)
<br />

#### By Tyler Bates & Ethan Firpo

<hr/>

## Description

Welcome to our "choose your own adventure" style web application designed to help entrepenuers and under-represtented individuals navigate through and learn about the legal services required to start a business. <br>
The user will be prompted a list of options attached to a question on what they're hoping to achieve. The option will have a description of what that legal service is/does and depending on what they choose the user will be provided with additional questions and options. At the end of the guide the user will be displayed information and links to all of the legal services required based on the information they provided throughout the application. [here]().

<hr />

## Application Diagrams

### App Design

<img src='src\images\Animation_Example.png' alt="app design">

### Legal Service Flow Chart

<img src='src\images\flowChart.png' alt="app design">

<hr/>

## Logistics

|                    | Minimum Product Features                                            |
| ------------------ | ------------------------------------------------------------------- |
| :heavy_check_mark: | User is greeted with a splash page                                                   |
| :heavy_check_mark: | Clicking on the start button begins the choose your own adventure                  |
| :heavy_check_mark: | User is prompt with a question and given multiple options                               |
| :heavy_check_mark: | Clicking on an option opens a modal with a description of the legal service |
| :heavy_check_mark: | User can confirm choice or back out from modal                   |
| :heavy_check_mark: | Clicking confirm navigates to the next question        |
| :heavy_check_mark: | User can go back to previous question resetting last answer            |
| :heavy_check_mark: | User is given results at end of application with list of needed legal services       |

<br/>
<br/>

|                    | Stretch Goals                                           |
| ------------------ | ------------------------------------------------------- |
| :heavy_check_mark: | Clean, Responsive UI                                    |
| :heavy_check_mark: | Site is deployed                                        |
|                    | Client can update questions/options via Contentful CMS   |
|                    | Client can add new questions/options via Contentful CMS    |
|                    | Application automatically re-deploys upon modification from client. |

<hr />

## Setup/Installation Requirements

### _For Client/Admin Setup_:

1. Create an account on Contentful's website and access your application's space following [these instructions](https://www.contentful.com/help/contentful-101/)

2. Once you've navigated to the application's space, you'll be presented with a list of each question and it's options. Clicking on these will give you access to edit all of the properties connected to the selected question/option.

3. After you've modified your selection simply click the green "Publish Changes" button to the right of the form.

    <img src='src\images\publish_changes.png' alt="app design">

4. The application will automatically re-deploy your updates to the live application through Netlify's [Continuous Deployment](https://www.netlify.com/products/build/#start)

### _For Accessing Application Source Code_:

1. Clone this projects repository into your local directory following [these](https://www.linode.com/docs/development/version-control/how-to-install-git-and-clone-a-github-repository/) instructions.

2. Open the now local project folder with [VSC](https://code.visualstudio.com/Download) or an equivalent

3. If Gatsby isn't already installed globally on your machine, do so by entering the following in the command line:
```
$ npm install -g gatsby-cli
```
4. Navigate to the project directory from your terminal by entering the following:

```
$ cd ~/rational-unicorn
```

5. Within the projects directory install all required dependencies with

```
$ npm install
```

6. Run the application to view in your browser with

```
$ gatsby develop
```

> If the browser does not automatically launch, view the project [here](https://localhost:8000)

<hr/>

## Known Bugs

### There are no known bugs at this time

If you have a bug or an idea, browse the open issues before opening a new one. You can also take a look at the [Open Source Guide](https://opensource.guide/).

<hr/>

## Technologies Used

- JavaScript
- React
- Gatsby
- Contentful
- Netlify
- Reactstrap
- Styled Components
- Bootstrap
- HTML
- CSS
- Git

<hr/>

## Legal

#### Apache License V2.0

Copyright 2020 Tyler Bates & Ethan Firpo @ [EyeCue Lab](https://www.eyecuelab.com/)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
