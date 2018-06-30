var page = {

	object: "GAME.Grid",
	desc: "GAME.Grid is a constructable class object. A Grid can be used to\
		store and retrieve any data in a two-dimensional grid structure.."
	
	constructor: {
		params: {
			width: "Initial width of the new grid.",
			height: "Initial height of the new grid.",
			options: ["OPTIONAL. You can use any, all or none of these parameters.", {
				value: "Default value that the grid should be cleared to."
			}]
		},
		example: function() {
			var myGrid = new GAME.Grid(64, 64, {
				value: 10
			});
		}
	}

}
	
<h1>GAME.Grid</h1>
		
<p>GAME.Grid is a constructable class object. A Grid can be used to store
and retrieve any data in a two-dimensional grid structure..</p>
		

<!--
-->
<h3>GAME.Grid( width, height, options )</h3>
<p><span class="constructor">Constructor</span></p>
<p>Creates a new tilemap.</p>
<h4>Parameters:</h4>
<ul>
	<li><b>width</b> - Initial width of the new grid.</li>
	<li><b>height</b> - OPTIONAL. Initial height of the new grid.</li>
	<li><b>options</b> - OPTIONAL. You can use any, all or none of these parameters.</li>
	<ul>
		<li><b>value</b> - Default value that the grid should be cleared to.</li>
	</ul>
</ul>
<h4 onclick="showExample(this)" class="show-toggle">Example</h4>
<code class="prettyprint">// Create a new grid with every cell set to 10
var myGrid = new GAME.Grid(64, 64, {
	value: 10
});</code>


<!--
-->
<h3>GAME.Grid.create( width, height, options )</h3>
<p><span class="static">Static</span></p>
<p>See Constructor for details.</p>
<h4 onclick="showExample(this)" class="show-toggle">Example</h4>
<code class="prettyprint">// Create a new grid with every cell set to 10
var myGrid = new GAME.Grid.create(64, 64, {
	value: 10
});</code>


<!--
-->
<h3>GAME.Grid.get( x, y )</h3>
<p><span class="method">Method</span><span class="static">Static</span></p>
<p>Gets the value of the grid cell at the given position.</p>
<h4>Parameters:</h4>
<ul>
	<li><b>x</b> - The X position.</li>
	<li><b>y</b> - The Y position.</li>
</ul>
<h4 onclick="showExample(this)" class="show-toggle">Example</h4>
<code class="prettyprint">// Get a value
var myVal = myGrid.get(16, 32);

// Get a value, static function
var myVal = GAME.Grid.get(myGrid, 16, 32);</code>

<!--
-->
<h3>GAME.Grid.set( x, y, value )</h3>
<p><span class="method">Method</span><span class="static">Static</span></p>
<p>Sets the value of the grid cell at the given position.</p>
<h4>Parameters:</h4>
<ul>
	<li><b>x</b> - The X position.</li>
	<li><b>y</b> - The Y position.</li>
	<li><b>value</b> - Value to set.</li>
</ul>
<h4 onclick="showExample(this)" class="show-toggle">Example</h4>
<code class="prettyprint">// Set a value
myGrid.set(16, 32, 20);

// Set a value, static function
GAME.Grid.set(myGrid, 16, 32, 20);</code>

<!--
-->
<h3>GAME.Grid.add( x, y, value )</h3>
<p><span class="method">Method</span><span class="static">Static</span></p>
<p>Adds the given value to the value of the grid cell at the given position.</p>
<h4>Parameters:</h4>
<ul>
	<li><b>x</b> - The X position.</li>
	<li><b>y</b> - The Y position.</li>
	<li><b>value</b> - Value to add.</li>
</ul>
<h4 onclick="showExample(this)" class="show-toggle">Example</h4>
<code class="prettyprint">// Add a value
myGrid.set(16, 32, 20);
myGrid.add(16, 32, 20); // Is now 40

// Add a value, static function
GAME.Grid.add(myGrid, 16, 32, 20); // And 60</code>

<!--
-->
<h3>GAME.Grid.multiply( x, y, value )</h3>
<p><span class="method">Method</span><span class="static">Static</span></p>
<p>Multiplies the given value to the value of the grid cell at the given position.</p>
<h4>Parameters:</h4>
<ul>
	<li><b>x</b> - The X position.</li>
	<li><b>y</b> - The Y position.</li>
	<li><b>value</b> - Value to multiply by.</li>
</ul>
<h4 onclick="showExample(this)" class="show-toggle">Example</h4>
<code class="prettyprint">// Multiply a value
myGrid.set(16, 32, 20);
myGrid.multiply(16, 32, 4); // Is now 80

// Multiply a value, static function
GAME.Grid.multiply(myGrid, 16, 32, 2); // And 160</code>

<!--
-->
<h3>GAME.Grid.clear( value )</h3>
<p><span class="method">Method</span><span class="static">Static</span></p>
<p>Clears every cell in the grid to the given value.</p>
<h4>Parameters:</h4>
<ul>
	<li><b>x</b> - The X position.</li>
	<li><b>y</b> - The Y position.</li>
	<li><b>value</b> - Value to multiply by.</li>
</ul>
<h4 onclick="showExample(this)" class="show-toggle">Example</h4>
<code class="prettyprint">// Clear the grid
myGrid.clear(0);

// Clear the grid, static function
GAME.Grid.clear(myGrid, 0);</code>

<!--
-->
<h3>GAME.Grid.destroy()</h3>
<p><span class="method">Method</span><span class="static">Static</span></p>
<p>Destroys the grid, allowing the memory to be reused.</p>
<h4>Parameters:</h4>
<ul>
	<li><b>x</b> - The X position.</li>
	<li><b>y</b> - The Y position.</li>
	<li><b>value</b> - Value to multiply by.</li>
</ul>
<h4 onclick="showExample(this)" class="show-toggle">Example</h4>
<code class="prettyprint">// Destroy the grid
myGrid.destroy();

// Destroy the grid, static function
GAME.Grid.destroy(myGrid);</code>


<script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>
</body>
</html>