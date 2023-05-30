import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const userId = +params['id'];
      this.loadUser(userId);
    });
  }

  loadUser(userId: number) {
    this.userService.getUserById(userId).subscribe(
      (user) => {
        this.user = user;
      },
      (error) => {
        console.log('Ocorreu um erro ao carregar o usuário:', error);
      }
    );
  }

  updateUser() {
    this.userService.updateUser(this.user).subscribe(
      () => {
        console.log('Usuário atualizado com sucesso');
        this.router.navigate(['/user-list']);
      },
      (error) => {
        console.log('Ocorreu um erro ao atualizar o usuário:', error);
      }
    );
  }
}
