export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  tags: string[];
  content: string;
  cover?: string;
  status?: string;
};

export const POSTS: BlogPost[] = [
  {
    title: "Protea Hotel King George: The Stay Default of George",
    slug: "protea-hotel-king-george-default",
    date: "Dec 20, 2025",
    author: "Defaults Lab",
    category: "Stay",
    excerpt:
      "Protea Hotel King George stays the easy “default” for George accommodation by removing travel friction: quick airport access, dependable check-ins, and consistent rooms for business and leisure. Here’s what keeps it top-of-mind near Fancourt and the CBD, and why repeat bookings compound over time.",
    tags: ["George", "Stay", "Hospitality"],
    cover: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210af?auto=format&fit=crop&w=1400&q=80",
    status: "Published",
    content: `
      <h2>Why Protea King George Wins First Choice</h2>
      <p>Protea Hotel King George anchors the "default" for overnight stays in George thanks to its position between the airport, Fancourt, and the CBD. Business travelers choose it because they can land, check-in late, and be on the course or in a meeting within minutes.</p>

      <div class="business-details-card">
        <div class="business-header">
          <div class="business-icon">🏨</div>
          <div class="business-title-section">
            <h3 class="business-name">Protea Hotel King George</h3>
            <p class="business-tagline">Luxury Hotel & Conference Venue</p>
          </div>
        </div>

        <div class="business-info-grid">
          <div class="info-item">
            <div class="info-icon">📞</div>
            <div class="info-content">
              <span class="info-label">Phone</span>
              <a href="tel:0448747659" class="info-value contact-link">044 874 7659</a>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">🕐</div>
            <div class="info-content">
              <span class="info-label">Hours</span>
              <span class="info-value">24/7</span>
              <span class="info-note">Open around the clock</span>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">📍</div>
            <div class="info-content">
              <span class="info-label">Location</span>
              <a href="https://maps.google.com/?q=-33.9612,22.4589" target="_blank" class="info-value location-link">
                York Street, George Central
              </a>
              <span class="info-note">10 minutes from George Airport</span>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">🌐</div>
            <div class="info-content">
              <span class="info-label">Website</span>
              <a href="https://www.proteahotels.com" target="_blank" class="info-value website-link">proteahotels.com</a>
            </div>
          </div>
        </div>

        <div class="business-features">
          <h4 class="features-title">✨ Key Features</h4>
          <div class="features-grid">
            <span class="feature-tag">Late Check-ins</span>
            <span class="feature-tag">Airport Transfers</span>
            <span class="feature-tag">Conference Facilities</span>
            <span class="feature-tag">Free WiFi</span>
            <span class="feature-tag">Fancourt Proximity</span>
          </div>
        </div>
      </div>

      <p>Key signals that keep Protea ahead:</p>
      <ul>
        <li><strong>Proximity + Access:</strong> 10 minutes from George Airport and quick transfers to Fancourt and corporate parks.</li>
        <li><strong>Predictability:</strong> Strong uptime on Wi‑Fi, late check-ins that actually work, and consistent room standards.</li>
        <li><strong>Event Gravity:</strong> Conferences and team offsites funnel repeat bookings and keep search visibility high.</li>
        <li><strong>Loyalty Stickiness:</strong> Brand trust plus corporate agreements reduce price sensitivity.</li>
      </ul>

      <p>During peak season, competitors briefly surface, but Protea sustains the default by reducing planning friction and offering reliable late arrivals. Families also benefit from proximity to schools, sports venues, and medical specialists when visiting George.</p>

      <div class="pro-tip-card">
        <div class="pro-tip-content">
          For the best rates and guaranteed late check-in, call <a href="tel:0448747659">044 874 7659</a> directly or visit their <a href="https://maps.google.com/?q=-33.9612,22.4589" target="_blank">location on Google Maps</a>.
        </div>
      </div>
    `,
  },
  {
    title: "Avis George Airport: Why the Car Hire Default Sticks",
    slug: "avis-george-airport-default",
    date: "Dec 18, 2025",
    author: "Mobility Desk",
    category: "Car Hire",
    excerpt:
      "At George Airport, the first ten minutes after landing decide the car-hire “default.” Avis wins that moment with counter placement, fast handovers, and predictable support when flights run late. This breakdown shows the operational signals that keep them first choice—even when competitors discount.",
    tags: ["Car Hire", "George Airport", "Mobility"],
    cover: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=80",
    status: "Published",
    content: `
      <h2>How Avis Holds the Airport Default</h2>
      <p>Car hire defaults are won inside the terminal. Avis George Airport owns that funnel from baggage claim to ignition because the counter, key handoff, and parking bays are the most direct path out of the airport.</p>

      <div class="business-details-card">
        <div class="business-header">
          <div class="business-icon">🚗</div>
          <div class="business-title-section">
            <h3 class="business-name">Avis George Airport</h3>
            <p class="business-tagline">Premium Car Rental Services</p>
          </div>
        </div>

        <div class="business-info-grid">
          <div class="info-item">
            <div class="info-icon">📞</div>
            <div class="info-content">
              <span class="info-label">Phone</span>
              <a href="tel:0448769314" class="info-value contact-link">044 876 9314</a>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">🕐</div>
            <div class="info-content">
              <span class="info-label">Hours</span>
              <span class="info-value">06:30 - 20:00</span>
              <span class="info-note">Open early for morning flights</span>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">📍</div>
            <div class="info-content">
              <span class="info-label">Location</span>
              <a href="https://maps.google.com/?q=-34.0007,22.3802" target="_blank" class="info-value location-link">
                George Airport Terminal
              </a>
              <span class="info-note">Right inside the airport</span>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">🌐</div>
            <div class="info-content">
              <span class="info-label">Website</span>
              <a href="https://www.avis.co.za" target="_blank" class="info-value website-link">avis.co.za</a>
            </div>
          </div>
        </div>

        <div class="business-features">
          <h4 class="features-title">✨ Key Features</h4>
          <div class="features-grid">
            <span class="feature-tag">Airport Counter Access</span>
            <span class="feature-tag">Pre-staged Vehicles</span>
            <span class="feature-tag">Quick Handover</span>
            <span class="feature-tag">Garden Route Fleet</span>
          </div>
        </div>
      </div>

      <p>What keeps them first choice:</p>
      <ul>
        <li><strong>Fast Path:</strong> Counter placement + pre-staged vehicles minimize walking distance and handover time.</li>
        <li><strong>Profile Memory:</strong> Frequent renters skip data entry; license and card data are pre-validated.</li>
        <li><strong>Queue Discipline:</strong> Internal targets keep visible queues under ~7 minutes to prevent defection to nearby desks.</li>
        <li><strong>Fleet Fit:</strong> Right-sized sedans and SUVs for Garden Route roads, reducing upsell friction.</li>
      </ul>

      <p>Even when challengers discount, travelers prioritize speed and certainty on arrival. Avis sustains the default by compressing the first ten minutes after landing and keeping support visible for late-night flights.</p>

      <div class="pro-tip-card">
        <div class="pro-tip-content">
          For the fastest airport pickup, call ahead to <a href="tel:0448769314">044 876 9314</a> or check their <a href="https://maps.google.com/?q=-34.0007,22.3802" target="_blank">airport location</a> for current availability.
        </div>
      </div>
    `,
  },
  {
    title: "The Fat Fish George: Capturing 'Eat' Defaults with Consistency",
    slug: "fat-fish-george-default",
    date: "Dec 15, 2025",
    author: "Food Signals",
    category: "Eat",
    excerpt:
      "The Fat Fish remains George’s seafood “default” by reducing dining risk: reliable quality, clear reservations, and service timing you can plan around. We map the consistency signals that beat novelty and explain why this restaurant stays the safe, high-confidence pick for families, travelers, and business meals.",
    tags: ["Eat", "Seafood", "George"],
    cover: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1400&q=80",
    status: "Published",
    content: `
      <h2>The Reliability Play for Dining Defaults</h2>
      <p>The Fat Fish is the seafood default in George because it minimizes dining risk for families, travelers, and business dinners. Guests know the quality, can reserve quickly, and avoid guesswork on service timing.</p>

      <div class="business-details-card">
        <div class="business-header">
          <div class="business-icon">🍽️</div>
          <div class="business-title-section">
            <h3 class="business-name">The Fat Fish George</h3>
            <p class="business-tagline">Fresh Seafood Restaurant</p>
          </div>
        </div>

        <div class="business-info-grid">
          <div class="info-item">
            <div class="info-icon">📞</div>
            <div class="info-content">
              <span class="info-label">Phone</span>
              <a href="tel:0448747803" class="info-value contact-link">044 874 7803</a>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">🕐</div>
            <div class="info-content">
              <span class="info-label">Hours</span>
              <span class="info-value">11:30 - 22:00</span>
              <span class="info-note">Lunch and dinner service</span>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">📍</div>
            <div class="info-content">
              <span class="info-label">Location</span>
              <a href="https://maps.google.com/?q=-33.9595,22.4530" target="_blank" class="info-value location-link">
                George Central Business District
              </a>
              <span class="info-note">Easy N2 and CBD access</span>
            </div>
          </div>
        </div>

        <div class="business-features">
          <h4 class="features-title">✨ Key Features</h4>
          <div class="features-grid">
            <span class="feature-tag">Fresh Seafood Daily</span>
            <span class="feature-tag">Family-Friendly</span>
            <span class="feature-tag">Business Dining</span>
            <span class="feature-tag">Online Reservations</span>
          </div>
        </div>
      </div>

      <p>How they defend the slot:</p>
      <ul>
        <li><strong>Stable Menu Core:</strong> Signature dishes anchor expectations; seasonal specials add variety without raising uncertainty.</li>
        <li><strong>Reservation Clarity:</strong> Online bookings with realistic seating times prevent surprise waits.</li>
        <li><strong>Service Timing:</strong> Tight kitchen and floor coordination keeps tables turning without rushing guests.</li>
        <li><strong>Multi-occasion Fit:</strong> Works for business lunches, family dinners, and traveler stopovers on the N2.</li>
      </ul>

      <p>New entrants may spike interest, but The Fat Fish holds the default by lowering friction and consistently delivering on the promise of "good seafood, on time, every time."</p>

      <div class="pro-tip-card">
        <div class="pro-tip-content">
          For the freshest catch and best table availability, call <a href="tel:0448747803">044 874 7803</a> or visit their <a href="https://maps.google.com/?q=-33.9595,22.4530" target="_blank">central location</a> in George CBD.
        </div>
      </div>
    `,
  },
  {
    title: "The Wilderness Hotel: Owning Resort Attention on the Lakeside",
    slug: "wilderness-hotel-default",
    date: "Dec 12, 2025",
    author: "Resort Watch",
    category: "Stay",
    excerpt:
      "The Wilderness Hotel holds the lakeside “default” in Wilderness by bundling what visitors actually want: location, spa access, and ready-to-book experiences. This post explains how packages reduce planning overhead, why availability matters in peak season, and what keeps alternatives from rotating in.",
    tags: ["Wilderness", "Resort", "Stay"],
    cover: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1400&q=80",
    status: "Published",
    content: `
      <h2>Bundle Power for Lakeside Stays</h2>
      <p>The Wilderness Hotel defends the default for lakeside stays by combining location with bundled experiences. Guests get spa access, shuttles, and guided outings without stitching together separate bookings.</p>

      <div class="business-details-card">
        <div class="business-header">
          <div class="business-icon">🏖️</div>
          <div class="business-title-section">
            <h3 class="business-name">The Wilderness Hotel</h3>
            <p class="business-tagline">Lakeside Resort & Spa</p>
          </div>
        </div>

        <div class="business-info-grid">
          <div class="info-item">
            <div class="info-icon">📞</div>
            <div class="info-content">
              <span class="info-label">Phone</span>
              <a href="tel:0448771110" class="info-value contact-link">044 877 1110</a>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">🕐</div>
            <div class="info-content">
              <span class="info-label">Hours</span>
              <span class="info-value">24/7</span>
              <span class="info-note">Guest services around the clock</span>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">📍</div>
            <div class="info-content">
              <span class="info-label">Location</span>
              <a href="https://maps.google.com/?q=-33.9934,22.5772" target="_blank" class="info-value location-link">
                Swartvlei Lake, Wilderness
              </a>
              <span class="info-note">Prime lakeside location</span>
            </div>
          </div>
        </div>

        <div class="business-features">
          <h4 class="features-title">✨ Key Features</h4>
          <div class="features-grid">
            <span class="feature-tag">Lakeside Setting</span>
            <span class="feature-tag">Spa Treatments</span>
            <span class="feature-tag">Guided Activities</span>
            <span class="feature-tag">Shuttle Services</span>
            <span class="feature-tag">Conference Facilities</span>
            <span class="feature-tag">Family-Friendly</span>
          </div>
        </div>
      </div>

      <p>Why it stays first choice:</p>
      <ul>
        <li><strong>Location Edge:</strong> Immediate access to the lagoon and nearby trails.</li>
        <li><strong>All-in Packages:</strong> Spa, shuttles, and activities reduce planning overhead for families and couples.</li>
        <li><strong>Consistent Availability:</strong> Reliable inventory during peak holiday weeks keeps it top-of-mind.</li>
        <li><strong>Event Magnet:</strong> Retreats and weddings create recurring demand and word-of-mouth.</li>
      </ul>

      <p>Challengers must drastically cut friction to displace this default; otherwise, the bundled ease keeps guests booking Wilderness first.</p>

      <div class="pro-tip-card">
        <div class="pro-tip-content">
          For the best lakeside experience and package deals, call <a href="tel:0448771110">044 877 1110</a> or explore their <a href="https://maps.google.com/?q=-33.9934,22.5772" target="_blank">beautiful location</a> on Swartvlei Lake.
        </div>
      </div>
    `,
  },
  {
    title: "Beacon Island Resort (Plett): The Coastal Default",
    slug: "beacon-island-default",
    date: "Dec 10, 2025",
    author: "Coastal Insights",
    category: "Stay",
    excerpt:
      "Beacon Island stays a Plettenberg Bay “default” by offering beachfront certainty with family-ready amenities in one place. We unpack why direct access and trusted routines reduce decision fatigue for holiday planners, and why boutique challengers struggle to displace a resort that solves the whole trip.",
    tags: ["Plett", "Stay", "Resort"],
    cover: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1400&q=80",
    status: "Published",
    content: `
      <h2>Why Beacon Island Keeps the Coastal Default</h2>
      <p>Beacon Island Resort remains the go-to coastal stay in Plettenberg Bay by combining direct beach access with trusted family amenities. Travelers save time by choosing a single location that fits kids, couples, and multi-generational trips.</p>

      <div class="business-details-card">
        <div class="business-header">
          <div class="business-icon">🏖️</div>
          <div class="business-title-section">
            <h3 class="business-name">Beacon Island Resort</h3>
            <p class="business-tagline">Beachfront Family Resort</p>
          </div>
        </div>

        <div class="business-info-grid">
          <div class="info-item">
            <div class="info-icon">📞</div>
            <div class="info-content">
              <span class="info-label">Phone</span>
              <a href="tel:0445331120" class="info-value contact-link">044 533 1120</a>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">🕐</div>
            <div class="info-content">
              <span class="info-label">Hours</span>
              <span class="info-value">24/7</span>
              <span class="info-note">Guest services around the clock</span>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">📍</div>
            <div class="info-content">
              <span class="info-label">Location</span>
              <a href="https://maps.google.com/?q=-34.0534,23.3712" target="_blank" class="info-value location-link">
                Plettenberg Bay Beachfront
              </a>
              <span class="info-note">Prime beachfront location</span>
            </div>
          </div>
        </div>

        <div class="business-features">
          <h4 class="features-title">✨ Key Features</h4>
          <div class="features-grid">
            <span class="feature-tag">Direct Beach Access</span>
            <span class="feature-tag">Family Pools</span>
            <span class="feature-tag">Supervised Activities</span>
            <span class="feature-tag">On-site Dining</span>
            <span class="feature-tag">Conference Facilities</span>
            <span class="feature-tag">Holiday Packages</span>
          </div>
        </div>
      </div>

      <p>Default drivers:</p>
      <ul>
        <li><strong>Beachfront Certainty:</strong> No commute to the sand; ocean views are guaranteed.</li>
        <li><strong>Family-Ready:</strong> Pools, supervised activities, and dining options keep families on property.</li>
        <li><strong>Brand Trust:</strong> Long-standing reputation reduces perceived risk for first-time Plett visitors.</li>
        <li><strong>Holiday Momentum:</strong> Peak-season visibility and repeat guests sustain the default year after year.</li>
      </ul>

      <p>Boutique challengers may win niche segments, but Beacon reduces decision fatigue so effectively that it keeps the first-choice slot for most holiday planners.</p>

      <div class="pro-tip-card">
        <div class="pro-tip-content">
          For the ultimate beachfront experience and family packages, call <a href="tel:0445331120">044 533 1120</a> or visit their <a href="https://maps.google.com/?q=-34.0534,23.3712" target="_blank">prime beachfront location</a> in Plettenberg Bay.
        </div>
      </div>
    `,
  },
  {
    title: "The Foundry Roasters: Brewing Coffee Defaults in George",
    slug: "foundry-roasters-george-default",
    date: "Dec 13, 2025",
    author: "Coffee Culture",
    category: "Coffee",
    excerpt:
      "The Foundry Roasters earns the morning “default” in George with repeatable quality: fresh roasting, trained baristas, and hours that match commuter rhythms. This piece covers how consistency becomes a habit loop for customers—and how a café turns reliability into daily demand.",
    tags: ["Coffee", "George", "Café"],
    cover: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=80",
    status: "Published",
    content: `
      <h2>Why The Foundry Roasters Owns the Morning Brew</h2>
      <p>The Foundry Roasters is the coffee default in George because they deliver consistent quality that professionals and coffee enthusiasts trust for their daily ritual. Early risers know they'll get a reliable cup without the gamble of inconsistent brews.</p>

      <div class="business-details-card">
        <div class="business-header">
          <div class="business-icon">☕</div>
          <div class="business-title-section">
            <h3 class="business-name">The Foundry Roasters</h3>
            <p class="business-tagline">Artisan Coffee Roasters</p>
          </div>
        </div>

        <div class="business-info-grid">
          <div class="info-item">
            <div class="info-icon">📞</div>
            <div class="info-content">
              <span class="info-label">Phone</span>
              <a href="tel:0448733444" class="info-value contact-link">044 873 3444</a>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">🕐</div>
            <div class="info-content">
              <span class="info-label">Hours</span>
              <span class="info-value">07:00 - 16:30</span>
              <span class="info-note">Morning coffee to afternoon pick-me-ups</span>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">📍</div>
            <div class="info-content">
              <span class="info-label">Location</span>
              <a href="https://maps.google.com/?q=-33.9578,22.4545" target="_blank" class="info-value location-link">
                George Central Business District
              </a>
              <span class="info-note">Conveniently located downtown</span>
            </div>
          </div>
        </div>

        <div class="business-features">
          <h4 class="features-title">✨ Key Features</h4>
          <div class="features-grid">
            <span class="feature-tag">Fresh Roasted Daily</span>
            <span class="feature-tag">Specialty Brews</span>
            <span class="feature-tag">Comfortable Seating</span>
            <span class="feature-tag">Free WiFi</span>
            <span class="feature-tag">Take-away Options</span>
          </div>
        </div>
      </div>

      <p>What keeps them the go-to choice:</p>
      <ul>
        <li><strong>Fresh Roast Focus:</strong> Daily roasting ensures peak freshness and flavor consistency.</li>
        <li><strong>Quality Control:</strong> Trained baristas deliver the same excellent experience every visit.</li>
        <li><strong>Convenient Hours:</strong> Opens early for morning commuters and stays open through afternoon.</li>
        <li><strong>Community Hub:</strong> Local meeting spot that builds loyalty through consistent quality.</li>
      </ul>

      <p>Competitors may offer trendy alternatives, but The Foundry maintains the default by never compromising on the fundamentals of great coffee and reliable service.</p>

      <div class="pro-tip-card">
        <div class="pro-tip-content">
          For the freshest brew and best morning start, call ahead to <a href="tel:0448733444">044 873 3444</a> or visit their <a href="https://maps.google.com/?q=-33.9578,22.4545" target="_blank">central location</a> in George CBD.
        </div>
      </div>
    `,
  },
  {
    title: "George Dental Care: Trusted Dental Defaults",
    slug: "george-dental-care-default",
    date: "Dec 14, 2025",
    author: "Health Services",
    category: "Dental",
    excerpt:
      "George Dental Care holds the dental “default” in George by pairing clinical competence with calm, predictable patient experience. We break down the trust signals—communication, comfort, and comprehensive services—that reduce anxiety and keep families returning instead of shopping around.",
    tags: ["Dental", "George", "Healthcare"],
    cover: "https://images.unsplash.com/photo-1606811951340-8dd032c1416b?auto=format&fit=crop&w=1400&q=80",
    status: "Published",
    content: `
      <h2>Why George Dental Care is the Trusted Default</h2>
      <p>George Dental Care holds the dental default in George by combining professional expertise with approachable service that reduces the anxiety many feel about dental visits. Families and individuals choose them because they know they'll receive quality care in a comfortable environment.</p>

      <div class="business-details-card">
        <div class="business-header">
          <div class="business-icon">🦷</div>
          <div class="business-title-section">
            <h3 class="business-name">George Dental Care</h3>
            <p class="business-tagline">Comprehensive Dental Services</p>
          </div>
        </div>

        <div class="business-info-grid">
          <div class="info-item">
            <div class="info-icon">📞</div>
            <div class="info-content">
              <span class="info-label">Phone</span>
              <a href="tel:0448744455" class="info-value contact-link">044 874 4455</a>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">🕐</div>
            <div class="info-content">
              <span class="info-label">Hours</span>
              <span class="info-value">08:00 - 17:00</span>
              <span class="info-note">Monday to Friday</span>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">📍</div>
            <div class="info-content">
              <span class="info-label">Location</span>
              <a href="https://maps.google.com/?q=-33.9612,22.4589" target="_blank" class="info-value location-link">
                George Central Business District
              </a>
              <span class="info-note">Easily accessible downtown</span>
            </div>
          </div>
        </div>

        <div class="business-features">
          <h4 class="features-title">✨ Key Features</h4>
          <div class="features-grid">
            <span class="feature-tag">Family Dentistry</span>
            <span class="feature-tag">Cosmetic Procedures</span>
            <span class="feature-tag">Emergency Care</span>
            <span class="feature-tag">Modern Equipment</span>
            <span class="feature-tag">Friendly Staff</span>
            <span class="feature-tag">Comprehensive Services</span>
          </div>
        </div>
      </div>

      <p>What makes them the first choice:</p>
      <ul>
        <li><strong>Trust Building:</strong> Long-standing reputation and positive patient reviews reduce decision anxiety.</li>
        <li><strong>Comprehensive Care:</strong> Full range of services means patients don't need to shop around.</li>
        <li><strong>Comfort Focus:</strong> Gentle approach and modern facilities make visits stress-free.</li>
        <li><strong>Community Roots:</strong> Deep local connections and word-of-mouth referrals sustain their position.</li>
      </ul>

      <p>New dental practices may enter the market, but George Dental Care maintains the default by consistently delivering trustworthy, comprehensive dental care that patients can rely on.</p>

      <div class="pro-tip-card">
        <div class="pro-tip-content">
          For reliable dental care and appointment availability, call <a href="tel:0448744455">044 874 4455</a> or visit their <a href="https://maps.google.com/?q=-33.9612,22.4589" target="_blank">convenient location</a> in George CBD.
        </div>
      </div>
    `,
  },
];

