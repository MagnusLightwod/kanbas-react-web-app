
export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        <p id="wd-p-1"> ... </p>
Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.

      </div>
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1"> ... </p>
        <p id="wd-p-2"></p>

This is the first paragraph. The paragraph tag is used to format
vertical gaps between long pieces of text like this one.

        <p id="wd-p-3"></p>
This is the second paragraph. Even though there is a deliberate white
gap between the paragraph above and this paragraph, by default
browsers render them as one contiguous piece of text as shown here on
the right.

        <p id="wd-p-4"></p>
This is the third paragraph. Wrap each paragraph with the paragraph
tag to tell browsers to render the gaps.


<div id="wd-lists">
  <h4>List Tags</h4>
  <h5>Ordered List Tag</h5>
  How to make pancakes:
  <ol id="wd-pancakes">
    <li>Mix dry ingredients.</li>
    <li>Add wet ingredients.</li>
    <li>Stir to combine.</li>
    <li>Heat a skillet or griddle.</li>
    <li>Pour batter onto the skillet.</li>
    <li>Cook until bubbly on top.</li>
    <li>Flip and cook the other side.</li>
    <li>Serve and enjoy!</li>
  </ol>

</div>

<div id="wd-lists">
  {/*<h4>List Tags</h4>*/}
  My favorite recipe:
  <ol id="wd-your-favorite-recipe">
    <li>3 Eggs</li>
    <li>2 cups milk</li>
    <li>2 cups pancake mix</li>
    <li>1 cup choclate protein powder</li>
    <li>slowly mix together all of the ingredients</li>
    <li>cook in a skillet 3 inch diameter pancackes</li>
    <li>enjoy! </li>
  </ol>
</div>

<h5>Unordered List Tag</h5>
My favorite books (in no particular order)
<ul id="wd-my-books">
  <li>Dune</li>
  <li>Lord of the Rings</li>
  <li>Ender's Game</li>
  <li>Red Mars</li>
  <li>The Forever War</li>
</ul>
Your favorite books (in no particular order)
<ul id="wd-your-books">
  <li> Dune</li>
  <li> Game of Thrones</li>
  <li> The dictionary</li>
</ul>

<div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%"> {/* 1 = thickness of borde edge, width is width of the table */}
          <thead> {/* headsings */}
            <tr> {/* start of a row*/}
              <th>Quiz</th> {/* table cell headings */}
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody> {/* body of the table */}
            <tr>
              <td align="left">Q1</td> {/* content in cells of body, done in order of headings*/ }
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>95</td>
            </tr>
            <tr> 
              <td> Q4</td>
              <td>Responsiveness</td>
              <td> 2/24/21</td>
              <td> 93</td>
            </tr>
            <tr>
              <td> Q5</td>
              <td> User Interfaces</td>
              <td> 3/1/24</td>
              <td> 99</td>
            </tr>

            <tr>
              <td> Q6</td>
              <td> React.js user Interfaces</td>
              <td> 3/8/24</td>
              <td> 80</td>
            </tr>

            <tr>
              <td> Q7</td>
              <td> User interfaces: hooks and redux</td>
              <td> 3/15/24</td>
              <td>90</td>
            </tr>

            <tr>
              <td> Q8</td>
              <td> Redux</td>
              <td> 3/22/24</td>
              <td> 87</td>
            </tr>

            <tr>
              <td> Q9</td>
              <td> Implementing Node Web Server APIs</td>
              <td> 3/29/24</td>
              <td> 85</td>
            </tr>

            <tr>
              <td> Q10</td>
              <td> Server Session and User Authentication</td>
              <td> 4/6/24</td>
              <td> 100</td>
            </tr>
          </tbody>
          <tfoot> {/* Foot of the table*/}
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div id="wd-images">
  <h4>Image tag</h4>
  Loading an image from the internet:
  <br />
  <img id="wd-starship"
    width="400px"
   src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
  />
  <br />
  Loading a local image:
  <br />
  <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" />
</div>

<div id="wd-forms">
  <h4>Form Elements</h4>
  <form id="wd-text-fields">
    <h5>Text Fields</h5>
    <label htmlFor="wd-text-fields-username">Username:</label>
    <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
    <label htmlFor="wd-text-fields-password">Password:</label>
    <input type="password" id="wd-text-fields-password" value="123@#$asd" />
    <br />
    <label htmlFor="wd-text-fields-first-name">First name:</label>
    <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
    <label htmlFor="wd-text-fields-last-name">Last name:</label>
    <input type="text" id="wd-text-fields-last-name" placeholder="Doe"
      value="Wonderland" title="The last name" />
    {/* copy rest of form elements here  */}
  </form>
</div>

<input type="text"
       placeholder="hint"
       title="tooltip"
       value="COMEDY: HARD VALE TYPES HERE"/>

<h5>Text boxes</h5>
<label>Biography:</label><br/>
<textarea id="wd-textarea" cols={30} rows={10}>Morbi vel faucibus magna, nec volutpat lorem. Cras varius neque a est aliquam dictum. Mauris velit nibh, feugiat eu nibh sed, commodo consectetur dui. Donec in rhoncus magna. Nulla faucibus justo et rhoncus semper. Duis ac lorem euismod, euismod lorem ut, varius libero. Nam malesuada diam justo, ut consequat ex posuere non. Fusce cursus nisi felis, sed euismod quam pretium ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent mauris nulla, rutrum ut arcu eget, ultrices pretium lorem. Integer non leo sit amet augue dapibus semper id vel massa. Aenean hendrerit venenatis metus, eget tempor neque varius at. Nulla porta nunc orci. Praesent quis feugiat leo. Nulla facilisi. </textarea>

<h5 id="wd-buttons">Buttons</h5>
<button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
  Hello World!
</button>

<h5>File upload</h5>
<input id="wd-upload" type="file"/>


<h5 id="wd-radio-buttons">Radio buttons</h5>

<label>Favorite movie genre:</label><br />

<input type="radio" name="radio-genre" id="wd-radio-comedy"/>
<label htmlFor="wd-radio-comedy">Comedy</label><br />

<input type="radio" name="radio-genre" id="wd-radio-drama"/>
<label htmlFor="wd-radio-drama">Drama</label><br />

<input type="radio" name="radio-genre" id="wd-radio-scifi"/>
<label htmlFor="wd-radio-scifi">Science Fiction</label><br />

<input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
<label htmlFor="wd-radio-fantasy">Fantasy</label>

<h5 id="wd-checkbox-buttons"> Checkbox buttons</h5>

<label>Favorite Season:</label><br />

<input type="checkbox" name="season-type" id="wd-season-winter" />
<label htmlFor="wd-checkbox-winter">Winter</label><br/>

<input type="checkbox" name="season-type" id="wd-season-spring" />
<label htmlFor="wd-checkbox-spring">Spring</label><br/>

<input type="checkbox" name="season-type" id="wd-season-summer" />
<label htmlFor="wd-checkbox-summmer" >Summer</label><br/>

<input type="checkbox" name="season-type" id="wd-season-fall" />
<label htmlFor="wd-checkbox-fall" >Fall</label><br/>

<h4 id="wd-dropdowns">Dropdowns</h4>

<h5>Select one</h5>
<label htmlFor="wd-select-one-genre">Favorite movie genre: </label><br/>
<select id="wd-select-one-grenre">
  <option value="COMEDY">Comedy</option>
  <option value="DRAMA">Drama</option>
  <option selected value="SCIFI">Science Fiction</option>
  <option value="FANTASY">Fantasty</option>
</select>

<h5>Select many</h5> {/* Control Click*/}
<label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
<select id="wd-select-many-genre" multiple>
   <option selected value="COMEDY">Comedy</option>
   <option value="DRAMA">Drama</option>
   <option selected value="SCIFI">
       Science Fiction</option>
   <option value="FANTASY">Fantasy</option>
</select>

<h4>Other HTML field types</h4>

<label htmlFor="wd-text-fields-email"> Email: </label>
<input type="email"
      placeholder="jdoe@somewhere.com"
      id="wd-text-fields-email"/><br/>

<label htmlFor="wd-text-fields-salary-start"> Starting salary:
</label>
<input type="number"
      id="wd-text-fields-salary-start"
      placeholder="1000"
      value="100000"/><br/>

<label htmlFor="wd-text-fields-rating"> Rating: </label>
<input type="range" id="wd-text-fields-rating"
      placeholder="Doe"
      max="5"
      value="4"/><br/>

<label htmlFor="wd-text-fields-dob"> Date of birth: </label>
<input type="date"
      id="wd-text-fields-dob"
      value="2000-01-21"/><br/>

<h4>Anchor tag</h4>
Please
<a id="wd-lipsum" href="https://www.lipsum.com">click here</a>
to get dummy text<br/>

<p id="wd-p-3"></p>
Please find the github repo <a id="wd-github" href="https://github.com/jannunzi">here</a> 



    </div>
    </div>

    
  );
}