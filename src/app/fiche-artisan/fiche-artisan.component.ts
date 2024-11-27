import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService } from '../artisan.service';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-fiche-artisan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fiche-artisan.component.html',
  styleUrl: './fiche-artisan.component.scss'
})
export class FicheArtisanComponent implements OnInit {
  artisan: any | null= null;
  messageSent: boolean = false;  // Variable pour afficher la popup de confirmation
  
  
  constructor(private route: ActivatedRoute, private artisanService: ArtisanService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      
      this.artisanService.getArtisanById(id).subscribe((artisan: any) => {
        this.artisan = artisan;
      });
    });
  }
  public sendEmail(e: Event) {
    e.preventDefault();

    // Envoi de l'email via EmailJS
    emailjs
      .sendForm('service_xserg7c', 'template_71psnql', e.target as HTMLFormElement, {
        publicKey: 'JWRz-mapX4b2U3Flz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          this.messageSent = true;  // Afficher la popup de message envoyé
          (e.target as HTMLFormElement).reset();  // Réinitialiser le formulaire après l'envoi
        },
        (error: any) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }

  // Optionnel : une méthode pour fermer la popup après quelques secondes
  closePopup() {
    setTimeout(() => {
      this.messageSent = false;
    }, 3000); // Popup fermée après 3 secondes
  }
}