import {provide, bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {CharacterService} from './character.service';
import {App} from './app';

bootstrap(App, [
	ROUTER_PROVIDERS,
	CharacterService,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
