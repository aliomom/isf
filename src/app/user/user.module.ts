import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconsModule, MDBBootstrapModule} from 'angular-bootstrap-md';
import {NgxUIModule} from '@swimlane/ngx-ui';
import {HttpClientModule} from '@angular/common/http';
import {NgwWowModule} from 'ngx-wow';
import {NgxImageZoomModule} from 'ngx-image-zoom';
import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {ToastrModule} from 'ngx-toastr';
import {CarouselModule} from 'ngx-carousel-lib';
import {ReactiveFormsModule} from '@angular/forms';
import {ParallaxModule} from 'ngx-parallax';
import {TabsModule} from 'ngx-bootstrap';
import {LoginPageComponent} from './ui/Pages/login-page/login-page.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {DataProcessingPageComponent} from './static-pages/data-processing-page/data-processing-page.component';
import {ImprintPageComponent} from './static-pages/imprint-page/imprint-page.component';
import {FAQComponent} from './static-pages/faq/faq.component';
import {AboutUsComponent} from './static-pages/about-us/about-us.component';
import {ContactSupportComponent} from './static-pages/contact-support/contact-support.component';
import {PrivacyPolicyComponent} from './static-pages/privacy-policy/privacy-policy.component';
import {TOSPageComponent} from './static-pages/tospage/tospage.component';
import {LoadingWidgetComponent} from './ui/widgets/loading-widget/loading-widget.component';
import {NgxImageZoomComponent} from './ui/widgets/ngx-image-zoom/ngx-image-zoom.component';
import {ProfilePageComponent} from './ui/Pages/profile-page/profile-page.component';
import {AboutIshtarPageComponent} from './static-pages/about-ishtar-page/about-ishtar-page.component';
import {ProfileEditPageComponent} from './ui/Pages/profile-edit-page/profile-edit-page.component';
import {HomeHeroComponent} from './home/component/home-hero/home-hero.component';
import {ArtTypeListComponent} from './art-type/component/art-type-list/art-type-list.component';
import {ArtTypeDetailsComponent} from './art-type/component/art-type-details/art-type-details.component';
import {ArtTypeDetailsPageComponent} from './art-type/component/art-type-details-page/art-type-details-page.component';
import {ArtTypeListPageComponent} from './art-type/component/art-type-list-page/art-type-list-page.component';
import {ItemBriefComponent} from './ui/components/item-brief/item-brief.component';
import {HomePageComponent} from './home/component/home-page/home-page.component';
import {NgxJsonLdModule} from '@ngx-lite/json-ld';
import {MarkdownModule} from 'ngx-markdown';
import {TranslateModule} from '@ngx-translate/core';
import {CartComponent} from './shared/cart/cart/cart.component';
import {PendingTransactionsComponent} from './profile/component/pending-transactions/pending-transactions.component';
import {PendingTransactionPageComponent} from './profile/component/pending-transaction-page/pending-transaction-page.component';
import {ConfirmPaymentComponent} from './profile/component/confirm-payment/confirm-payment.component';
import {CancelOrderComponent} from './profile/component/cancel-order/cancel-order.component';
import {OrderImageCardComponent} from './profile/component/order-image-card/order-image-card.component';
import {PaintingModule} from './painting/painting.module';
import {SharedModule} from './shared/shared.module';
import {StatueModule} from './statue/statue.module';
import {ArtistModule} from './artist/artist.module';
import {SearchModule} from './search/search.module';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    // User
    UserComponent,
    // Pages
    ProfileEditPageComponent,
    // Components
    ArtTypeListPageComponent,
    LoginPageComponent,
    TOSPageComponent,
    PrivacyPolicyComponent,
    ContactSupportComponent,
    AboutUsComponent,
    FAQComponent,
    ImprintPageComponent,
    DataProcessingPageComponent,
    LoadingWidgetComponent,
    NgxImageZoomComponent,
    ProfilePageComponent,
    AboutIshtarPageComponent,
    HomeHeroComponent,
    ArtTypeListComponent,
    ArtTypeDetailsComponent,
    ArtTypeDetailsPageComponent,
    ItemBriefComponent,
    HomePageComponent,
    CartComponent,
    PendingTransactionsComponent,
    PendingTransactionPageComponent,
    ConfirmPaymentComponent,
    CancelOrderComponent,
    OrderImageCardComponent
  ],
  exports: [
    // User
    UserComponent,
    // Pages
    ProfileEditPageComponent,
    // Components
    ArtTypeListPageComponent,
    LoginPageComponent,
    TOSPageComponent,
    PrivacyPolicyComponent,
    ContactSupportComponent,
    AboutUsComponent,
    FAQComponent,
    ImprintPageComponent,
    DataProcessingPageComponent,
    ItemBriefComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    NgxUIModule, IconsModule,
    HttpClientModule,
    NgwWowModule,
    StatueModule,
    UserRoutingModule,
    ToastrModule.forRoot(), CarouselModule,
    ReactiveFormsModule, ParallaxModule, TabsModule,
    MatDialogModule,
    MatStepperModule,
    NgxPaginationModule,
    NgxImageZoomModule.forRoot(),
    NgxJsonLdModule,
    MarkdownModule.forChild(),
    TranslateModule,
    SharedModule,
    PaintingModule,
    ArtistModule,
    SearchModule
  ],
  schemas: [],
  providers: []
})
export class UserModule {
}
