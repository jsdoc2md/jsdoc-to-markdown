[![view on npm](http://img.shields.io/npm/v/handbrake-js.svg)](https://www.npmjs.org/package/handbrake-js)
[![npm module downloads per month](http://img.shields.io/npm/dm/handbrake-js.svg)](https://www.npmjs.org/package/handbrake-js)
[![Build Status](https://travis-ci.org/75lb/handbrake-js.svg?branch=master)](https://travis-ci.org/75lb/handbrake-js)
[![Dependency Status](https://david-dm.org/75lb/handbrake-js.svg)](https://david-dm.org/75lb/handbrake-js)
![Analytics](https://ga-beacon.appspot.com/UA-27725889-6/handbrake-js/README.md?pixel)

#handbrake-js
Handbrake-js is [Handbrake](http://handbrake.fr) for [node.js](http://nodejs.org), funnily enough. It aspires to do two things:

1. provide a lean and stable foundation for building video transcoding software in node.js
2. enhance the vanilla HandbrakeCLI command-line experience with some new features: 
   - Cleaner output, live updating statistics
   - Improved user input validation
   - Clear explainations when user input is invalid


### Compatible Platforms
Tested on Mac OSX, Ubuntu 14, Windows XP, Windows 7 and Windows 8.1.

**Ubuntu 14.04 notice**: Transcoding to MP4 fails on Ubuntu since 14.04 [for this reason](https://forum.handbrake.fr/viewtopic.php?f=13&t=30044).

##Installation
###System Requirements
Just [node.js](http://nodejs.org). Every else is installed automatically.

###As a library 
Move into your project directory then run: 
```sh
$ npm install handbrake-js --save
```
*Mac / Linux users may need to run with `sudo`*.

Now you can begin encoding from your app. 

```js
var hbjs = require("handbrake-js");

hbjs.spawn({ input: "dope shit.avi", output: "dope shit.m4v" })
  .on("error", function(err){
    // invalid user input, no video found etc
  })
  .on("progress", function(progress){
    console.log(
      "Percent complete: %s, ETA: %s", 
      progress.percentComplete, 
      progress.eta
    );
  });
```
###As a command-line app
From any directory run the following:
```sh
$ npm install -g handbrake-js
```
*Mac / Linux users may need to run with `sudo`*.

Now, you can call `handbrake` as you would HandbrakeCLI, using all the usual [options](https://trac.handbrake.fr/wiki/CLIGuide). By default, just statistics are output, passing `--verbose` prints the raw HandbrakeCLI output. This command will transcode an AVI to the more universal H.264 (mp4):
```sh
$ handbrake --input "some episode.avi" --output "some episode.mp4" --preset Normal
Task      % done     FPS       Avg FPS   ETA
Encoding  1.07       131.76    158.12    00h21m11s
```

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

* [hbjs~Handbrake {class}](#module_handbrake-js.Handbrake)
  * [handbrake.output {string}](#module_handbrake-js.Handbrake#output)
  * [handbrake.options {object}](#module_handbrake-js.Handbrake#options)
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

- options {`Object` | `Array`} - [Options](https://trac.handbrake.fr/wiki/CLIGuide#options) to pass directly to HandbrakeCLI

**Returns**: { [Handbrake](#module_handbrake-js.Handbrake) } - A `Handbrake` instance  
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

- options {`Object`} - [Options](https://trac.handbrake.fr/wiki/CLIGuide#options) to pass directly to HandbrakeCLI
- [onComplete] {`function`} - If passed, `onComplete(err, stdout, stderr)` will be called on completion, `stdout` and `stderr` being strings containing the HandbrakeCLI output.

**Example**  
```js
var hbjs = require("handbrake-js");

hbjs.exec({ preset-list: true }, function(err, stdout, stderr){
    if (err) throw err;
    console.log(stdout);
});
```

<a name="module_handbrake-js.Handbrake"></a>
###class: hbjs~Handbrake
A thin wrapper on the handbrakeCLI child_process handle. An instance of this class is returned by `hbjs.spawn()`.

**Members**


  * [handbrake.output](#module_handbrake-js.Handbrake#output)
  * [handbrake.options](#module_handbrake-js.Handbrake#options)
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


*documentation by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*.