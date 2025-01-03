'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nom-du-projet documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AddBilanComponent.html" data-type="entity-link" >AddBilanComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddDpiFormComponent.html" data-type="entity-link" >AddDpiFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddDpiHeroComponent.html" data-type="entity-link" >AddDpiHeroComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddDpiNavBarComponent.html" data-type="entity-link" >AddDpiNavBarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddDpiPageComponent.html" data-type="entity-link" >AddDpiPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddOrdonnanceComponent.html" data-type="entity-link" >AddOrdonnanceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddStaffPageComponent.html" data-type="entity-link" >AddStaffPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AjouterBilanBiologiqueComponent.html" data-type="entity-link" >AjouterBilanBiologiqueComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AjouterBilanRadiologiqueComponent.html" data-type="entity-link" >AjouterBilanRadiologiqueComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AjouterConsultationComponent.html" data-type="entity-link" >AjouterConsultationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AjouterSoinPageComponent.html" data-type="entity-link" >AjouterSoinPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BilanBioPageComponent.html" data-type="entity-link" >BilanBioPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BilanRadioPageComponent.html" data-type="entity-link" >BilanRadioPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CompteRenduPageComponent.html" data-type="entity-link" >CompteRenduPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConsultationMedecinPageComponent.html" data-type="entity-link" >ConsultationMedecinPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConsultationNavbarComponent.html" data-type="entity-link" >ConsultationNavbarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DpiConsultationsPageComponent.html" data-type="entity-link" >DpiConsultationsPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DpiNavbarComponent.html" data-type="entity-link" >DpiNavbarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DpiPatientPageComponent.html" data-type="entity-link" >DpiPatientPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DpiSoinPageComponent.html" data-type="entity-link" >DpiSoinPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmptyNavbarComponent.html" data-type="entity-link" >EmptyNavbarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InfoPatientComponent.html" data-type="entity-link" >InfoPatientComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LandingPageComponent.html" data-type="entity-link" >LandingPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginFormComponent.html" data-type="entity-link" >LoginFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginPageComponent.html" data-type="entity-link" >LoginPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MonBilanBioComponent.html" data-type="entity-link" >MonBilanBioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrdonnancePageComponent.html" data-type="entity-link" >OrdonnancePageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PersonnelFormComponent.html" data-type="entity-link" >PersonnelFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfilAdminComponent.html" data-type="entity-link" >ProfilAdminComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfilInfermierComponent.html" data-type="entity-link" >ProfilInfermierComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfilLaborantinComponent.html" data-type="entity-link" >ProfilLaborantinComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfilMedecinComponent.html" data-type="entity-link" >ProfilMedecinComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfilPatientComponent.html" data-type="entity-link" >ProfilPatientComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfilRadiologueComponent.html" data-type="entity-link" >ProfilRadiologueComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfilStaffComponent.html" data-type="entity-link" >ProfilStaffComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RechDpiPageComponent.html" data-type="entity-link" >RechDpiPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ResumePageComponent.html" data-type="entity-link" >ResumePageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UpFormComponent.html" data-type="entity-link" >UpFormComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AjouterBilanBiologiqueService.html" data-type="entity-link" >AjouterBilanBiologiqueService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AjouterBilanRadiologiqueService.html" data-type="entity-link" >AjouterBilanRadiologiqueService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AjouterSoinService.html" data-type="entity-link" >AjouterSoinService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BilanBioService.html" data-type="entity-link" >BilanBioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BilanRadiologiqueService.html" data-type="entity-link" >BilanRadiologiqueService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsultationService.html" data-type="entity-link" >ConsultationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreerDPIService.html" data-type="entity-link" >CreerDPIService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrdonnanceService.html" data-type="entity-link" >OrdonnanceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PatientService.html" data-type="entity-link" >PatientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RechercheService.html" data-type="entity-link" >RechercheService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SoinService.html" data-type="entity-link" >SoinService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BilanBiologique.html" data-type="entity-link" >BilanBiologique</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BilanRadiologique.html" data-type="entity-link" >BilanRadiologique</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Soin.html" data-type="entity-link" >Soin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});