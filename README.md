<h1>Synera QA Automation Assessment</h1>

<h2>Description</h2>
<p>This repository contains the automated tests created as part of the Synera QA Automation Assessment. The tests are written using WebdriverIO and focus on verifying the functionality of the Battery Pack Calculator in the Synera Run application.</p>

<h2>Installation Instructions</h2>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/Ritika1153/Synera-Qa-Automation-Assesment.git</code></pre>
  </li>
  <li>Navigate to the project directory:
    <pre><code>cd synera-automation</code></pre>
  </li>
  <li>Install the necessary dependencies:
    <pre><code>npm install</code></pre>
  </li>
</ol>

<h2>Running the Tests</h2>
<p>To run all test cases under the <code>test/specs</code> folder, use the following command:</p>
<pre><code>npm run wdio</code></pre>

<p>If you want to run a single test case at a time, use the following command, replacing <code>&lt;test_case name&gt;</code> with the name of the test case file:</p>
<pre><code>npm run wdio -- --spec ./test/specs/&lt;test_case name&gt;.js</code></pre>

<h2>Folder Structure</h2>
<p>The project folder structure is organized as follows:</p>
<ul>
  <li><code>test</code>: Contains the base folder for all test-related files.
    <ul>
      <li><code>components</code>: Contains reusable components for the tests.
        <ul>
          <li><code>base_components</code>: Contains the base components used across tests.</li>
          <li><code>form_components</code>: Contains components specific to forms.</li>
        </ul>
      </li>
      <li><code>pageobject</code>: Contains Page Object Model files.
      </li>
      <li><code>specs</code>: Contains the test cases.</li>
      <li><code>screenshots</code>: Contains images captured during test execution.</li>
      <li><code>constants</code>: Contains files with constant data used in the tests.</li>
    </ul>
  </li>
</ul>

<h2>Test Cases</h2>
<p>The following test cases are included in this repository:</p>
<ol>
  <li><strong>Reset Button Test Case:</strong> This test case changes the input form values and then clicks the reset button. It then compares the resulting values with the default values.</li>
  <li><strong>Run Button Test Case:</strong> This test case initially pre-computes some input and output values. It then sets the input values based on the precomputed values, clicks the run button, and compares the output with the precomputed values.</li>
  <li><strong>Autorun Button Test Case:</strong> This test case also pre-computes some input and output values. It enables the auto-run button, changes the design space value based on the precomputed values, and then compares the output.</li>
  <li><strong>Canvas Test Case:</strong> This test case compares a pre-taken screenshot with the current component of the diagram based on the precomputed values used to generate the screenshot.</li>
</ol>
