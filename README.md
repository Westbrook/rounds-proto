# rounds-proto

# Workflows
## At the bar
### Target
Use gives location access and network conditional allow it to be leveraged as part of the experience
 1. request location access
 2. granted
 3. location is derived
 4. location returns nearby (and user frequented) member establishment
 5. user confirms correct location
 6. user confirms autopay or not<sup>1</sup><sup>2</sup>
 7. user confirms "another round" repeating previous (or frequent/regular) order at this loation<sup>3</sup>
 8. order gets passed from users app to the bars app and the order is ready shortly for a waitress to devilver to your table or for pickup at the bar.
   * suboptimal version of this interaction populates a list for the user to read from when they finally get the bar tender's attention.
   * this version would also apply for locations that aren't fully participating in the app, though it's unclear how we'd have their drink offerings in that context
 9. rinse and repeat until you've had more than your share of fun

### New drink selection
After confirming that they would like to activate autopay, user decides they would like to purchase something other than the suggestion offered based on their previous activity at this location.
 1. "not today" selected
 2. offer list of available beverages<sup>4</sup>
 3. beverage selected
 4. confirm beverage screen includes option to send order as well as add another drink.
 5. repeat til full party has ordered
 6. return to step 8 of **Target** workflow
 
### No autopay
If you're not willing to have autopay on, I'm not sure if you'd be willing to pay through the app on a round by round basis.  One couls assume at this point that when autopay is off you'd be paying the bar manually, in which case little would change in the continuing interaction with the app. 

### Incorrect location
The location is derived, but comparing that to the server returns an incorrect location.
 1. user confirms incorrect location
 2. list of location weighted by nearby and frequency of visits is offered for selection<sup>5</sup>
 3. user confirms actual location
 4. return to step 6 of **Target** workflow

### Location not derived (location access not granted/inadequent connectivity to user application)
If access is granted, but location cannot be derived, it is very possible that the connectivity required to use the application would not be available.  The possibility of this occurring would lead me to suggesting that free wi-fi routers might be a good tie in with proprietor participation in the application.  In a context where this is so, we could make use of service workers (as they become available in mobile, currently recent versions of Android only), or other local storage types to keep information about frequented locations/order available in the phone.  However, I doubt you could convince establishments that allowing post paying through the features made available with service works would alow payments to be processed with the app in this context.
 1. location not derived, but connectivity or offline content available.
 2. list of location weighted by frequency of visits is offered for selection
 3. user confirms actual location
 4. return to step 6 of **Target** workflow


##After the bar
It would be amazing if you could use some sort of time/light responsivity to trigger this side of the app, but likely it would be touch and go to prove that.  You could also geofence this to you home, which might be nice.  The it would be an option in the "not home" interface.
 1. Save time, make "last night"/"last visit" very upfront in this view.
 2. List all
   * drill down to rounds and beverages and surface options for making these verious breakdowns "the regular"
 3. Manage cards
 4. Request share
   * don't let your friends get away with paying for their drinks<sup>6</sup>

1: Autopay could be analogous to a feature of Square Wallet that allowed users to automatically order and pay for their "regular" order at location they frequent.  While I agree with the validity (and posibility) of a full noUI application of this, I feel some level of UI is helpful early in a product's life cycle to make it clear to users what's happening and train then to use a lower level of user input to get the things they actually want.  There is more to learn from other failures of the Square Wallet rollout: require early large partnerships to opt into all features of the app.  If major partners fail to enable autopay and fail to train their staff of the use of the feature it's novelty and ability to decrease the friction of the purchasing process will go unleveraged against the growing success of the product.

2: Over the course of multiple orders in the same night autopay could activate a sort of Google Goggles math test to ensure the safty of the apps users.  We're OK with them being forgetful, but we want them to have so much fun they use it again, not that they have so much fun that they can't.

3: If frequent/regular is decided on a sinlge person basis you could agregate that data across multiple locations and offer it across them all and at new locations to reduce friction at this step.  Unsure if you could suggest group orders successfully across multiple locations (or even multiple visits) but I think there could be room to make that case that at a single location you have some level of probability of visiting it with the same people on a regular basis, so there could be a lot more nuance to the "another round" interface.

4: Current database restrictions don't allow for much content sharding to make this process less complicated than a long list of products.  In other contexts I would say price sharing (which is currently available) would be useful, but I've never see someone say "what do you got for $10-15?" at a bar.  More understandable breakdowns like "popular" and "alcohol type" come to mind as ways to more easily navigate to the beverage you're looking to order.

5: Another data point addition for ease of use.

6: If Facebook can take on venmo for micro payments, why can't everyone?
