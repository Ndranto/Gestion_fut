import { NgModule } from '@angular/core';
import { NouveauInventaireComponent } from './nouveau-inventaire/nouveau-inventaire';
import { PopoverPage2 } from './nouveau-inventaire/nouveau-inventaire';
import { AjoutFutBonComponent } from './ajout-fut-bon/ajout-fut-bon';
@NgModule({
	declarations: [NouveauInventaireComponent,
    AjoutFutBonComponent],
	imports: [PopoverPage2],
	exports: [NouveauInventaireComponent,
    AjoutFutBonComponent]
})
export class ComponentsModule {}
