(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{241:function(t,e,a){"use strict";a.r(e);var i=a(6),l=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memory"}},[t._v("#")]),t._v(" Memory")]),t._v(" "),a("p",[t._v("Similar to other languages that use linear memory, and until the "),a("a",{attrs:{href:"https://github.com/WebAssembly/gc",target:"_blank",rel:"noopener noreferrer"}},[t._v("GC"),a("OutboundLink")],1),t._v(" 🦄 proposal becomes available, all data in AssemblyScript is stored at a specific offset in linear memory so other parts of the program can read and modify it.")]),t._v(" "),a("h2",{attrs:{id:"importing-memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importing-memory"}},[t._v("#")]),t._v(" Importing memory")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebAssembly.Memory"),a("OutboundLink")],1),t._v(" instance used by your program can be imported from the host by using the "),a("code",[t._v("--importMemory")]),t._v(" command line option. The module will then expect an import named "),a("code",[t._v("memory")]),t._v(" within the "),a("code",[t._v("env")]),t._v(" module to be provided upon instantiation.")]),t._v(" "),a("p",[t._v("An imported memory becomes the singleton memory of the module and can be accessed in the same way as a non-imported memory. Note that if the module defines "),a("code",[t._v("data")]),t._v(" segments, it will place the data into the imported memory upon instantiation of the module, which must be taken into account when pre-populating the memory externally (e.g. when utilizing "),a("code",[t._v("--memoryBase")]),t._v(" to reserve some space as described in "),a("RouterLink",{attrs:{to:"/memory.html#memory-regions"}},[t._v("Memory Regions")]),t._v(" below).")],1),t._v(" "),a("h2",{attrs:{id:"exporting-memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exporting-memory"}},[t._v("#")]),t._v(" Exporting memory")]),t._v(" "),a("p",[t._v("A module exports its memory as "),a("code",[t._v("memory")]),t._v(" by default, unless disabled with "),a("code",[t._v("--noExportMemory")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"accessing-memory-during-instantiation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-memory-during-instantiation"}},[t._v("#")]),t._v(" Accessing memory during instantiation")]),t._v(" "),a("p",[t._v("AssemblyScript runs any top-level statements as part of the emitted WebAssembly module's implicit "),a("code",[t._v("start")]),t._v(" function by default. Since the implicit start function executes immediately upon instantiation, this leads to a special case because control flow has not yet yielded back to the host, so the module's exported memory only becomes available externally "),a("em",[t._v("after")]),t._v(" the implicit start function completes. The implicit start function may however already trigger external code that requires to read from memory, like when printing a string to console.")]),t._v(" "),a("p",[t._v("There are two solutions to this:")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("Exporting an explicit start function")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("--explicitStart")]),t._v(" command line argument can be used to force exporting the start function as "),a("code",[t._v("_start")]),t._v(" instead of making it the module's implicit start function. When doing so it is important to call "),a("code",[t._v("exports._start()")]),t._v(" once before calling any other exports to properly initialize the module first.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Preparing memory pre-instantiation and importing it")])]),t._v(" "),a("p",[t._v("An alternative is to create the "),a("code",[t._v("WebAssembly.Memory")]),t._v(" object before instantiating the module, and using "),a("code",[t._v("--importMemory")]),t._v(" to import it. This way around the memory is already known when the implicit start function executes.")])])]),t._v(" "),a("h2",{attrs:{id:"memory-regions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memory-regions"}},[t._v("#")]),t._v(" Memory regions")]),t._v(" "),a("p",[t._v("Internally, there are two regions of memory the compiler is aware of:")]),t._v(" "),a("h3",{attrs:{id:"static-memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-memory"}},[t._v("#")]),t._v(" Static memory")]),t._v(" "),a("p",[t._v("Memory starts with static data, like strings and arrays (of constant values) the compiler encountered while translating the program. Unlike in other languages, there is no concept of a stack in AssemblyScript and it instead relies on WebAssembly's execution stack exclusively.")]),t._v(" "),a("p",[t._v("A custom region of memory can be reserved using the "),a("code",[t._v("--memoryBase")]),t._v(" option. For example, if one needs an image buffer of exactly N bytes, instead of allocating it one could reserve that space, telling the compiler to place its own static data afterwards, partitioning memory in this order:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Region")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Reserved memory")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("As specified with "),a("code",[t._v("--memoryBase")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Static memory")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Starting right after reserved memory, ends at "),a("code",[t._v("__heap_base")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Dynamic memory")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Starting right after static memory, starts at "),a("code",[t._v("__heap_base")])])])])]),t._v(" "),a("h3",{attrs:{id:"dynamic-memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-memory"}},[t._v("#")]),t._v(" Dynamic memory")]),t._v(" "),a("p",[t._v("Dynamic memory, commonly known as the heap, is managed by the "),a("RouterLink",{attrs:{to:"/garbage-collection.html"}},[t._v("garbage collector")]),t._v(", at runtime. When space for a new object is requested by the program, the runtime's memory manager reserves a suitable region and returns a pointer to it to the program. Once an object is not needed anymore and becomes unreachable, the garbage collector returns the object's memory to the memory manager for reuse.")],1),t._v(" "),a("p",[t._v("The memory manager guarantees an alignment of 16 bytes, so an "),a("code",[t._v("ArrayBuffer")]),t._v(", which can be the backing buffer of multiple views, always fits up to "),a("code",[t._v("v128")]),t._v(" values with natural  alignment.")]),t._v(" "),a("h2",{attrs:{id:"internals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#internals"}},[t._v("#")]),t._v(" Internals")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://webassembly.github.io/spec/core/syntax/instructions.html#memory-instructions",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebAssembly is specified to use little-endian"),a("OutboundLink")],1),t._v(" and as a result, so is AssemblyScript.")]),t._v(" "),a("p",[t._v("Objects in AssemblyScript have a common hidden header used by the runtime to keep track of them. The header includes information about the block used by the memory manager, state information used by the garbage collector, a unique id per concrete class and the data's actual size. The length of a "),a("code",[t._v("String")]),t._v(' (id = 1) is computed from that size for example. The header is "hidden" in that the reference to an object points right after it, at the first byte of the object\'s actual data.')]),t._v(" "),a("h4",{attrs:{id:"common-header-layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-header-layout"}},[t._v("#")]),t._v(" Common header layout")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("Offset")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("#mmInfo")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-20")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("usize")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Memory manager info")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("#gcInfo")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-16")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("usize")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Garbage collector info")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("#gcInfo2")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-12")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("usize")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Garbage collector info")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("#rtId")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-8")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("u32")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Unique id of the concrete class")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("#rtSize")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("u32")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Size of the data following the header")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Payload starts here")])])])]),t._v(" "),a("p",[t._v("In Wasm32, the header is aligned to 16 bytes right after "),a("code",[t._v("mmInfo")]),t._v(" and "),a("code",[t._v("rtSize")]),t._v(", with 16 bytes of managed information in between. The object's payload starts at 16 bytes alignment again.")]),t._v(" "),a("p",[t._v("The most basic objects using the common header are "),a("code",[t._v("ArrayBuffer")]),t._v(" and "),a("code",[t._v("String")]),t._v(". These do not have any fields but are just data:")]),t._v(" "),a("h4",{attrs:{id:"arraybuffer-layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arraybuffer-layout"}},[t._v("#")]),t._v(" ArrayBuffer layout")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("Offset")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-20")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("See above")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Common header")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("[0]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("8-bit untyped")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The first byte")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("[1]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("8-bit untyped")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The second byte")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("...")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("[N]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("8-bit untyped")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The N-th byte")])])])]),t._v(" "),a("h4",{attrs:{id:"string-layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-layout"}},[t._v("#")]),t._v(" String layout")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("Offset")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-20")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("See above")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Common header")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("[0]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("u16")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The first character")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("[1]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("u16")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The second character")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("...")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("[N]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("N << 1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("u16")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The N-th character")])])])]),t._v(" "),a("h3",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),a("p",[t._v("Functions being passed by reference are represented by a first-class "),a("code",[t._v("Function<T>")]),t._v(", consisting of the index of the function in the WebAssembly table and an optional pointer to the function's environment if it is a closure. If the function is not a closure, the environment pointer is zero.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("Offset")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-20")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("See above")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Common header")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v(".index")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("u32")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Function index")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("#env")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("usize")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Function environment pointer")])])])]),t._v(" "),a("h3",{attrs:{id:"collections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collections"}},[t._v("#")]),t._v(" Collections")]),t._v(" "),a("p",[t._v("Collections like "),a("code",[t._v("Array")]),t._v(", "),a("code",[t._v("Map")]),t._v(" and "),a("code",[t._v("Set")]),t._v(" use one or multiple "),a("code",[t._v("ArrayBuffer")]),t._v("s to store their data, but their backing buffers are only exposed for typed arrays, as it is the case in JavaScript. This is because collections can grow automatically, which would otherwise lead to no longer valid references to buffers sticking around.")]),t._v(" "),a("h4",{attrs:{id:"arraybufferview-layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arraybufferview-layout"}},[t._v("#")]),t._v(" ArrayBufferView layout")]),t._v(" "),a("p",[t._v("This is not an actual class but a helper to simplify the implementation of the typed array views. Each typed array view like "),a("code",[t._v("Uint8Array")]),t._v(" is like a subclass of "),a("code",[t._v("ArrayBufferView")]),t._v(" with a static value type attached.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("Offset")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-20")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("See above")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Common header")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("#data")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("ArrayBuffer")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Backing buffer reference")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("#dataStart")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("usize")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Start of the data within .data")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("#dataLength")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("u32")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Length of the data from .dataStart")])])])]),t._v(" "),a("h4",{attrs:{id:"array-layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array-layout"}},[t._v("#")]),t._v(" Array layout")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("Offset")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-20")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("See above")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Common header")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("See above")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("ArrayBufferView")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v(".length")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("i32")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Mutable length of the data the user is interested in")])])])]),t._v(" "),a("p",[t._v("The layouts of "),a("code",[t._v("Set")]),t._v(" and "),a("code",[t._v("Map")]),t._v(" are a bit more sophisticated and therefore not mentioned here, but feel free to take a look at their sources.")])])}),[],!1,null,null,null);e.default=l.exports}}]);