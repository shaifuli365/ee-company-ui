
#Run on local
ng serve -o --port 4203
ng run enterprise-ecommerce:serve-ssr

#deployment
npm install
npm run build:ssr 
npm run serve:ssr

### generate component and module
ng g m components/my-business/order-manage/manage-pos-order
ng g c components/my-business/order-manage/manage-pos-order  --skipTests=true

ng g d shared/module/input-number --skipImport=true

#TODO
cart
refund-dispute
delivery 
