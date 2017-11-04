function header()
{
	var html = `<div class = 'navbar'>			
				<ul class = 'navLeft'>
				    <li class = 'bar dropdown'>
						<a class = 'dropdown-toggle' data-toggle = 'dropdown' href = '#' >Now Playing <span class = 'caret'></span></a>
							<ul class = 'dropdown-menu'>
								<li><a href = '#'>Horror</a></li>
								<li><a href = '#'>Sci-Fi</a></li>
								<li><a href = '#'>Documentory</a></li>
								<li><a href = '#'>Action</a></li>								
							</ul>
					</li>
				  <li class = 'bar' ><a href='#'>Bookings</a></li>
				  <li class = 'bar' ><a href='#'>Your Reservations</a></li>
				  <li class = 'bar' ><a href='contactUs.html'>Contact Us</a></li>
				  <li class = 'bar' ><a href='aboutUs.html'>About Us</a></li>
				</ul>			
				<ul class = 'navRight'>
				  <li class = 'bar' ><a href='login.html'>Login</a></li>
				  <li class = 'register bar' ><a href='register.html'>Register</a></li>
				</ul>
			</div>	
			<h1 id = 'title'><a id = 'title' href = 'index.html'>Buhnrop</a></h1>`;
			
			document.getElementById("header").innerHTML = html;
}

function footer()
{
	var html = `<div class = "row" style = "margin-top:15px">
			<div class = "col-sm-4">
				<h4 style = "text-align: right">&copy; 2017 Buhnrop</h4>
			</div>
			<div class = "col-sm-4">
				<h4 style = "text-align: center">Follow us on</h4>
			</div>
			<div class = "col-sm-4" style = "text-align: left">
				<a href = "https://www.facebook.com"><i class="fa fa-facebook-square" style="font-size:48px; margin-right:15px"></i></a>
				<a href = "https://www.twitter.com"><i class="fa fa-twitter-square" style="font-size:48px; margin-right:15px"></i></a>
				<a href = "https://www.linkedin.com"><i class="fa fa-linkedin-square" style="font-size:48px; margin-right:15px"></i></a>
				<a href = "https://www.pinterest.com"><i class="fa fa-pinterest-square" style="font-size:48px"></i></a>		
			</div>
		</div>`;
		document.getElementById("footer").innerHTML = html;
}