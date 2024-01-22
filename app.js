let button = document.getElementById("torch");

let isToggled = false;
torch.addEventListener("click", () => {
	isToggled = !isToggled;
	button.classList.toggle("active");
	
	if(isToggled)
	{
		fetch("/torch/on", {method: 'POST'});
		button.innerText = "Torch ON";
	} else {
		fetch("/torch/off", {method: 'POST'});
		button.innerText = "Torch OFF";
	}
	
	//console.log(`On: ${isToggled}`);
});