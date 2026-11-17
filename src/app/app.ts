import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  imports: [RouterOutlet, CommonModule, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('di-scope-demo');
  // Inject AuthService using Angular Dependency Injection
  // Marked as public so it can be accessed in the template
  constructor(public auth: AuthService) {}
  // Logs out the currently authenticated user
  logout(): void {
    this.auth.logout();
  }
}
