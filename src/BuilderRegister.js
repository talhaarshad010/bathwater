//
//  BuilderLandingPage.js
//  
//
//  Created by Nathan Cumberbatch on 12/4/24.
//

// BuilderRegister.js
import { Builder } from '@builder.io/react';
import LandingPage from './screens/LandingPage';

// Register your LandingPage component with Builder.io
Builder.registerComponent(LandingPage, {
  name: 'LandingPage',
  inputs: [
    // Define any props your component uses (optional)
  ],
});
