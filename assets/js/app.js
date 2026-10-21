
let movies= document.getElementById("movies");

 const setrating = (rating) => {
	 if( rating >= 7){
		 return `badge-success`
	 } else if ( rating >= 5 && rating < 7){
		 return `badge-warning`
	 } else {
		 return `badge-danger`
	 } 
 }
  
let result = ``;

movieArr.forEach((mvimg) =>{
	result += ` <div class="col-sm-4 mt-3" >
				    <div class="card">
					    <figure class="movieCard m-0">
                          <img src="https://media.themoviedb.org/t/p/w500/${mvimg.poster_path || mvimg.backdrop_path }">
						    alt="" class="img-fluid">
							<figcaption>
							  <div class="titleInfo">
							    <div class="row">
								  <div class="col-9">
								    <h2> ${mvimg.title || mvimg.original_title}</h2>
								  </div>
								  <div class="col-3">
								     <h3>
									    <span class="badge ${setrating(mvimg.vote_average)}">${mvimg.vote_average}</span>
									 </h3>
								  </div>
								</div>
							  </div>
							  <div class="overView">
							    <h5>${mvimg.title || mvimg.original_title}</h5>
								<p>${mvimg.overview}</p>
							  </div>
							</figcaption>
						</figure>
					</div>
				 </div>`;
})

movies.innerHTML=result;