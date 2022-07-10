import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-clock',
	templateUrl: './clock.component.html',
	styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, AfterViewInit {
	
	date: string;
	
	constructor() { }

	ngOnInit(): void {
	
	}
	
	ngAfterViewInit(): void {
		this.setCurrentTime();			
	}
			
	setCurrentTime() {

		var date = new Date();

		var hours = date.getHours() % 12;
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();

		var hoursHand = document.getElementById("hours-hand");
		if (hoursHand != null)
			hoursHand.style.animationDelay = - ((hours * 3600) + (minutes * 60) + seconds) + "s";

		var minutesHand = document.getElementById("minutes-hand");
		if (minutesHand != null)
			minutesHand.style.animationDelay = - ((minutes * 60) + seconds) + "s";

		var secondsHand = document.getElementById("seconds-hand");
		if (secondsHand != null)
			secondsHand.style.animationDelay = -seconds + "s";
	}
}
