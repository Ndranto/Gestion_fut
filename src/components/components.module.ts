import { NgModule } from '@angular/core';
import { NouveauInventaireComponent } from './nouveau-inventaire/nouveau-inventaire';
import { PopoverPage2 } from './nouveau-inventaire/nouveau-inventaire';
@NgModule({
	declarations: [NouveauInventaireComponent],
	imports: [PopoverPage2],
	exports: [NouveauInventaireComponent]
})
export class ComponentsModule {}
