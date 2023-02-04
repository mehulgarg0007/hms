import React from 'react';
import './components.css';
function Navbar(){
    return(
       <>
       <div class="search-local">
	

	<input type="text" placeholder="Enter city name,area etc..." onfocus="this.placeholder=''" 
           onblur="this.placeholder='enter your text'"></input>
	<button>
		<a href="#">Search</a>
		
	</button>
</div>


       </>
    );
}

export default Navbar ;