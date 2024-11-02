import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChildComponentComponent } from "../../components/child-component/child-component.component";
import { ParenComponent } from "../../components/parent-component/parent.component";
import { ReactivFormComponent } from "../../components/reactiv-form/reactiv-form.component";

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  imports: [RouterLink, ChildComponentComponent, ParenComponent, ReactivFormComponent],
})
export class AboutComponent {

}
