var projects =	[
					{
						title: "Mildly Infuriating Game",
						link: "mildlyinfuriatinggame.html",
						description: "An annoying game that you must try out!",
						creator: "domi-s",
						thumbnail: "https://images.pexels.com/photos/987585/pexels-photo-987585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					},
					{
						title: "Every second",
						link: "everysecond.html",
						description: "Tick. Tock. More than 142K YouTube videos have been watched.",
						creator: "domi-s",
						thumbnail: "https://images.pexels.com/photos/280264/pexels-photo-280264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					},
					{
						title: "Username Generator",
						link: "usernamegenerator.html",
						description: "Find your desired username with a click.",
						creator: "domi-s",
						thumbnail: "https://images.pexels.com/photos/1799342/pexels-photo-1799342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					},
					{
						title: "What Happened Then",
						link: "whathappenedthen.html",
						description: "Find out what happened in a certain year.",
						creator: "domi-s",
						thumbnail: "https://images.pexels.com/photos/273011/pexels-photo-273011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					}
				];

function display(jsonListOfItems, element) {
	element.innerHTML = "";
	for(i = jsonListOfItems.length - 1; i >= 0; i--) {
		var newItemLink = document.createElement('a');
		var newItem = document.createElement('div');
		var newItemThumbnail = document.createElement('div');
		var newItemData = document.createElement('div');

		newItemLink.appendChild(newItem);
		newItem.appendChild(newItemThumbnail);
		newItem.appendChild(newItemData);

		newItemLink.setAttribute("href", jsonListOfItems[i].link);
		newItem.setAttribute("class", "project");
		newItemThumbnail.setAttribute("class", "thumbnail");
		newItemData.setAttribute("class", "data");
		newItemThumbnail.setAttribute("style", "background-image: url(" + jsonListOfItems[i].thumbnail + ");");
		newItemData.innerHTML = "<h1>" + jsonListOfItems[i].title + "</h1><p>" + jsonListOfItems[i].description + "<br><spa style='color: gray;'>By @" + jsonListOfItems[i].creator + "</span></p>";

		element.appendChild(newItemLink);
	}
}