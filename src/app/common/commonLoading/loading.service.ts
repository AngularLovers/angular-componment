import {
  ComponentResolver,
  Injectable,
  ComponentFactory,
  ComponentRef,
  ViewContainerRef,
  Injector
} from '@angular/core';
import { LoadingComponent } from './loading.component';

@Injectable()
export class LoadService {
  public defaultViewContainerRef: ViewContainerRef;
  private cmpRef: ComponentRef<LoadingComponent>;
  private loaded: boolean;

  constructor(private componentResolver: ComponentResolver, private injector: Injector) {

  }

  show(viewContainer?: ViewContainerRef): void {
    viewContainer = viewContainer || this.defaultViewContainerRef;
    if (!this.loaded) {
      this.loaded = true;
      this.componentResolver.resolveComponent(LoadingComponent)
        .then((factory: ComponentFactory<LoadingComponent>) => {
          return this.cmpRef = viewContainer.createComponent(factory, 0, this.injector);
        })
        .then((cmpRef: ComponentRef<LoadingComponent>) => {
          viewContainer.element.nativeElement.appendChild(cmpRef.location.nativeElement);
          cmpRef.instance.show();
        });

      return;
    }
  }

  hide(): void {
    this.loaded = false;
    this.cmpRef.destroy();
  }

}
