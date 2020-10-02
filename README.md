![](https://i.ibb.co/QNgD1P6/guide-logo.png)
<br />

#### By Tyler Bates & Ethan Firpo @ [EyeCue Lab](https://www.eyecuelab.com/)

<hr/>

## Description

Welcome to Choose Your Venture "choose your own adventure" style web application designed to help entrepenuers and under-represtented individuals navigate through and learn about the legal services required to start a business. <br>
The user will be prompted a list of options attached to a question on what they're hoping to achieve. The option will have a description of what that legal service is/does and depending on what they choose the user will be provided with additional questions and options. At the end of the guide the user will be displayed information and links to all of the legal services required based on the information they provided throughout the application with the option of either downloading their results or emailing them to Rational Unicorn to further discuss their potential business entity. Check out the application [here](https://chooseyourventure.netlify.app/).

<hr />

## Application Diagrams

### App Design
Splash Page | First Node | Confirmation Modal | Results Page | Email Confirmation Modal
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:|
|<img src='src\images\AppDesign1.PNG' alt="design panel 1"> |<img src='src\images\AppDesign2.PNG' alt="design panel 2"> | <img src='src\images\AppDesign3.PNG' alt="design panel 3"> |<img src='src\images\AppDesign4.PNG' alt="design panel 4"> | <img src='src\images\AppDesign5.PNG' alt="design panel 5"> |

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
| :heavy_check_mark: | User can download formatted PDF copy of application results |
| :heavy_check_mark: | User can email application results to designated company email with custom message | 
| :heavy_check_mark: | Application has Clean, Responsive UI                                    |
| :heavy_check_mark: | Site is deployed                                        |
| :heavy_check_mark: | Client can update questions/options via Contentful CMS   |
| :heavy_check_mark: | Client can add new questions/options via Contentful CMS    |
| :heavy_check_mark: | Application automatically re-deploys upon modification to Conentful CMS or Repository Master Branch. |
<br/>
<br/>

|                    | Stretch Goals                                           |
| ------------------ | ------------------------------------------------------- |
| | Emailed results are handled through SendGrid|
| | Incorporate transitional animations in application UI|
| | Add OAuth to Admin page|

<hr />

## Setup/Installation Requirements

### _For Client/Admin Setup_:

1. Create an account on Contentful's website and access your application's space following [these instructions](https://www.contentful.com/help/contentful-101/)

2. Once you've navigated to the application's space, you'll be presented with a list of each question and it's options. Clicking on these will give you access to edit all of the properties connected to the selected question/option.

3. After you've modified your selection simply click the green "Publish Changes" button to the right of the form.

    <img src='.\src\images\publish_changes.PNG' alt='app design'>

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

#### MIT License

Copyright (c) 2020 Tyler Bates & Ethan Firpo @ [EyeCue Lab](https://www.eyecuelab.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
