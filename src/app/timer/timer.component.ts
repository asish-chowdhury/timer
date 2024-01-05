import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})

export class TimerComponent implements OnInit{
  time!: number;
  isPaused!: boolean;
  interval: any;
  isStart !: boolean;
  isResume !: boolean;

  ngOnInit() {
    this.resetTimer();
  }

  startTimer() {
    this.isPaused = false;
    this.isStart = true;
    this.interval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        this.stopTimer();
      }
    }, 1000);
    this.formatTime();
  }

  pauseTimer() {
    this.isPaused = true;
    clearInterval(this.interval);
  }

  resumeTimer() {
    this.isResume = true;
    this.isPaused = false;
    this.isStart = false;
    this.startTimer();
  }

  formatTime(): string {
    const minutes = Math.floor(this.time / 60);
    const seconds = this.time % 60;
    
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  stopTimer() {
    clearInterval(this.interval);
    this.resetTimer();
  }

  resetTimer() {
    this.time = 300; // 5 minutes in seconds
    this.isPaused = false;
    clearInterval(this.interval);
  }
}