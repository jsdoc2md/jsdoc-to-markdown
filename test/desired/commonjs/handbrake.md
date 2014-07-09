#API Reference
<a name="module_handbrake-js"></a>
Handbrake for node.js.

**Example**  
```js
var hbjs = require("handbrake-js");
```

**API**

* [hbjs.spawn(options)](#module_handbrake-js.spawn)
* [hbjs.exec(options, [onComplete])](#module_handbrake-js.exec)

**Inner Members**

* [hbjs~Handbrake](#module_handbrake-js.Handbrake) {class}
  * [handbrake.output](#module_handbrake-js.Handbrake#output) {string}
  * [handbrake.options](#module_handbrake-js.Handbrake#options) {object}
  * [event: "start"](#module_handbrake-js.Handbrake#event_start)
  * [event: "begin"](#module_handbrake-js.Handbrake#event_begin)
  * [event: "progress"](#module_handbrake-js.Handbrake#event_progress)
  * [event: "output"](#module_handbrake-js.Handbrake#event_output)
  * [event: "error"](#module_handbrake-js.Handbrake#event_error)
  * [event: "end"](#module_handbrake-js.Handbrake#event_end)
  * [event: "complete"](#module_handbrake-js.Handbrake#event_complete)

<a name="module_handbrake-js.spawn"></a>
###hbjs.spawn(options)
Spawns a HandbrakeCLI process with the supplied [options](https://trac.handbrake.fr/wiki/CLIGuide#options), returning an instance of `Handbrake` on which you can listen for events.

**Params**

- options `Object` | `Array` - [Options](https://trac.handbrake.fr/wiki/CLIGuide#options) to pass directly to HandbrakeCLI

**Returns**: [Handbrake](#module_handbrake-js.Handbrake) - A `Handbrake` instance  
**Example**  
```js
var hbjs = require("handbrake-js");

hbjs.spawn(options)
    .on("error", console.error)
    .on("output", console.log);
```

<a name="module_handbrake-js.exec"></a>
###hbjs.exec(options, [onComplete])
Runs HandbrakeCLI with the supplied [options](https://trac.handbrake.fr/wiki/CLIGuide#options) calling the supplied callback on completion. The exec method is best suited for short duration tasks where you can wait until completion for the output.

**Params**

- options `Object` - [Options](https://trac.handbrake.fr/wiki/CLIGuide#options) to pass directly to HandbrakeCLI
- [onComplete] `function` - If passed, `onComplete(err, stdout, stderr)` will be called on completion, `stdout` and `stderr` being strings containing the HandbrakeCLI output.

**Example**  
```js
var hbjs = require("handbrake-js");

hbjs.exec({ preset-list: true }, function(err, stdout, stderr){
    if (err) throw err;
    console.log(stdout);
});
```

<a name="module_handbrake-js.Handbrake"></a>
###hbjs~Handbrake
A thin wrapper on the handbrakeCLI child_process handle. An instance of this class is returned by `hbjs.spawn()`.

**Scope**: inner class of hbjs

**Members**

  * [handbrake.output](#module_handbrake-js.Handbrake#output) {string}
  * [handbrake.options](#module_handbrake-js.Handbrake#options) {object}
  * [event: "start"](#module_handbrake-js.Handbrake#event_start)
  * [event: "begin"](#module_handbrake-js.Handbrake#event_begin)
  * [event: "progress"](#module_handbrake-js.Handbrake#event_progress)
  * [event: "output"](#module_handbrake-js.Handbrake#event_output)
  * [event: "error"](#module_handbrake-js.Handbrake#event_error)
  * [event: "end"](#module_handbrake-js.Handbrake#event_end)
  * [event: "complete"](#module_handbrake-js.Handbrake#event_complete)

<a name="module_handbrake-js.Handbrake#output"></a>
####handbrake.output
A `String` containing all handbrakeCLI output

<a name="module_handbrake-js.Handbrake#options"></a>
####handbrake.options
the options HandbrakeCLI will be spawned with

<a name="module_handbrake-js.Handbrake#event_start"></a>
####event: "start"
Fired as HandbrakeCLI is launched. Nothing has happened yet.

<a name="module_handbrake-js.Handbrake#event_begin"></a>
####event: "begin"
Fired when encoding begins. If you're expecting an encode and this never fired, something went wrong.

<a name="module_handbrake-js.Handbrake#event_progress"></a>
####event: "progress"
Fired at regular intervals passing a `progress` object containing:

- taskNumber `Number` current task index
- taskCount `Number` total tasks in the queue
- percentComplete `Number`
- fps `Number` Frames per second
- avgFps `Number` Average frames per second
- eta `String` Estimated time until completion
- task `String` Task description, either "Encoding" or "Muxing"

<a name="module_handbrake-js.Handbrake#event_output"></a>
####event: "output"
An aggregate of `stdout` and `stderr` output from the underlying HandbrakeCLI process.

<a name="module_handbrake-js.Handbrake#event_error"></a>
####event: "error"
All operational exceptions are delivered via this event. Passes an `Error` instance, the `name` value of which will be one of:

- HandbrakeCLINotFound
- HandbrakeCLIError
- NoTitleFound
- HandbrakeCLICrash
- ValidationError

<a name="module_handbrake-js.Handbrake#event_end"></a>
####event: "end"
Fired on successful completion of an encoding task. Always follows a `begin` event, with some `progress` in between.

<a name="module_handbrake-js.Handbrake#event_complete"></a>
####event: "complete"
Fired when HandbrakeCLI exited cleanly. This does not necessarily mean your encode completed as planned..


*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*.