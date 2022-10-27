import NavigationDrawerObjects from './business_insider/NavigationDrawerObjects';


const url = 'https://www.businessinsider.com/ikea-nyc-store-planning-studio-tour-2019-4'
const facebook_insider_url = 'https://www.facebook.com/businessinsider'    
const twitter_insider_url = 'https://twitter.com/businessinsider'
const linkedin_insider_url = 'https://www.linkedin.com/company/businessinsider/'
const youtube_insider_url = 'https://www.youtube.com/user/businessinsider'
const instagram_insider_url = 'https://www.instagram.com/businessinsider/'
const navigationDrawerObjects = new NavigationDrawerObjects()

context('Social Media Redirection', () => {
  beforeEach(() => {
    cy.visit(url)
  })

  it('Verify Social Media Navigation to Facebook - Businessinsider', () => {

    cy.get(navigationDrawerObjects.hamburgerButton()).trigger('mouseover')
    cy.get(navigationDrawerObjects.hamburgerButton()).click()
    cy.get(navigationDrawerObjects.drawerComponent()).scrollTo('bottom')
    
    cy.get(navigationDrawerObjects.facebookIcon()).invoke('attr', 'href').should('eq', facebook_insider_url)
    cy.get(navigationDrawerObjects.facebookIcon()).invoke('attr', 'target').should('eq', "_blank")    
  }),
  
  it('Verify Social Media Navigation to Twitter - Businessinsider', () => {

    cy.get(navigationDrawerObjects.hamburgerButton()).trigger('mouseover')
    cy.get(navigationDrawerObjects.hamburgerButton()).click()
    cy.get(navigationDrawerObjects.drawerComponent()).scrollTo('bottom')

    cy.get(navigationDrawerObjects.twitterIcon()).invoke('attr', 'href').should('eq', twitter_insider_url)
    cy.get(navigationDrawerObjects.twitterIcon()).invoke('attr', 'target').should('eq', "_blank")
  }),
  
  it('Verify Social Media Navigation to Linkedin - Businessinsider', () => {
    cy.get(navigationDrawerObjects.hamburgerButton()).trigger('mouseover')
    cy.get(navigationDrawerObjects.hamburgerButton()).click()
    cy.get(navigationDrawerObjects.drawerComponent()).scrollTo('bottom')
        
    cy.get(navigationDrawerObjects.linkedinIcon()).invoke('attr', 'href').should('eq', linkedin_insider_url)
    cy.get(navigationDrawerObjects.linkedinIcon()).invoke('attr', 'target').should('eq', "_blank")
  }),
  
  it('Verify Social Media Navigation to Youtube - Businessinsider', () => {

    cy.get(navigationDrawerObjects.hamburgerButton()).trigger('mouseover')
    cy.get(navigationDrawerObjects.hamburgerButton()).click()
    cy.get(navigationDrawerObjects.drawerComponent()).scrollTo('bottom')
    
    cy.get(navigationDrawerObjects.youtubeIcon()).invoke('attr', 'href').should('eq', youtube_insider_url)
    cy.get(navigationDrawerObjects.youtubeIcon()).invoke('attr', 'target').should('eq', "_blank")
  }),

  it('Verify Social Media Navigation to Instagram - Businessinsider', () => {

    cy.get(navigationDrawerObjects.hamburgerButton()).trigger('mouseover')
    cy.get(navigationDrawerObjects.hamburgerButton()).click()
    cy.get(navigationDrawerObjects.drawerComponent()).scrollTo('bottom')
    
    cy.get(navigationDrawerObjects.instagramIcon()).invoke('attr', 'href').should('eq', instagram_insider_url)
    cy.get(navigationDrawerObjects.instagramIcon()).invoke('attr', 'target').should('eq', "_blank")
  })
})
