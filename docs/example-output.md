## Example output
Some example output creating using `jsdoc2md`.

### Generated README files
These projects insert jsdoc2md output into a readme template.

<table>
  <thead>
    <tr><th>Project</th><th>Notes</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/75lb/handbrake-js">handbrake-js</a></td>
      <td>
        <p>A module exposing two methods and an inner class. The API docs are inserted into <a href="https://github.com/75lb/handbrake-js/tree/master/jsdoc2md">this README template</a> by this command: <br>
        <code>$ jsdoc2md --template jsdoc2md/README.hbs lib/*.js</code></p>
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/75lb/command-line-args">command-line-args</a></td>
      <td>Demonstrates documentation of ES2015 classes plus the <strong><code>@module</code></strong>, <strong><code>@typicalname</code></strong>, <strong><code>@throws</code></strong> and <strong><code>@alias</code></strong> tags.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/75lb/array-tools#api-reference">array-tools</a></td>
      <td>Very simple module exporting a collection of static methods. Demonstrates use of <strong><code>@category</code></strong> to group identifiers in the member-list.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/jesucarr/tokenbucket">jesucarr/tokenbucket</a></td>
      <td>Demonstrates <strong><code>--param-list-format list</code></strong> and the documentation of Promises using the <strong><code>@fulfil</code></strong> and <strong><code>@reject</code></strong> tags.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/75lb/ansi-escape-sequences">ansi-escape-sequences</a></td>
      <td>Demonstrates usage of <strong><code>@enum {type}</code></strong> (rendered in table format).</td>
    </tr>
  </tbody>
</table>
