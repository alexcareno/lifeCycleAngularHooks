import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
	selector: 'products-price',
	templateUrl: './price.component.html',
	styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

	@Input() price: number = 0;
	public interval$?: Subscription;


	ngOnDestroy(): void {
		console.log('Componente hijo - ngOnDestroy');
		this.interval$?.unsubscribe();
	}
	ngOnChanges(changes: SimpleChanges): void {
		console.log('Componente hijo - ngOnChanges');
		console.log({ changes });
	}
	ngOnInit(): void {
		console.log('Componente hijo - ngOnInit');
		this.interval$ = interval(1000).subscribe((value) => console.log(`Componente hijo - interval ${value}`));
	}

}
