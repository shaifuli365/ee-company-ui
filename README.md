# Run:
github.com/nvm-sh/nvm   (node version : 16.17.1)
npm install --force
ng start


# theme loading , routing and displaying architecture

1 WebsiteModule will load angular RouterModule

2 RouterModule will load ThemeLoaderLayoutModule for home routing  ['']

3 ThemeLoaderLayoutModule will load ThemeLoaderLayoutComponent

3 ThemeLoaderLayoutComponent will load Theme module by company

4 For example: for padma theme it will load PadmaModule

5 PadmaModule will load PadmaLayoutModule


# todo
load website component
then *ngIf

#Run on local
ng serve -o --port 4203
ng run enterprise-ecommerce:serve-ssr

#deployment
npm install
npm run build:ssr
npm run serve:ssr

### generate component and module
ng g m components/my-business/order-manage/manage-pos-order
ng g c components/my-business/order-manage/manage-pos-order --skipTests=true

ng g d shared/module/input-number --skipImport=true

#TODO
cart
refund-dispute
delivery 


ng add @angular/material
npm install ngx-bootstrap --save



sudo nano /etc/hosts
127.0.0.1       sherabazar.com
127.0.0.1       natunbazar.com


