**Feature Flag Migration Strategy – Web Development Lead Interview**

---

### Slide 1: Introduction
- **Name**: Sehajpreet Singh
- **Role**: Senior Web Developer / Tech Lead
- Led the migration of 2000+ pages at BMO from a legacy stack to a performant, accessible Next.js + Contentful platform
- Built CLI tools, codemods, and accessibility automation that improved Lighthouse scores and reduced QA overhead
- Integrated LaunchDarkly for safe, segmented rollouts and A/B testing across 5000+ production pages
- Conducted org-wide training on CMS module development to align 50+ developers and streamline content modeling
- At Staples, improved ecommerce performance and component reusability across teams
- At Cineplex, contributed to the React Native-based ticketing app used nationwide
- Focused on scalability, developer velocity, and enabling clean UI delivery pipelines
---

### Slide 2: Problem Statement
- Current workflow relies on **big bang releases** — migrating hundreds or thousands of pages at once
- **Complex UI tools** (calculators, forms, dashboards) delay component rollout
- These are **high-risk**, multi-state, design-heavy UIs often tightly coupled to **legacy logic**
- The current strategy is **risky, slow, and hard to test** — blocking delivery, QA, and stakeholder feedback

---

### Slide 3: POC Solutions
1. **AST Tools (`ts-morph`, `jscodeshift`)**
   - Identify, refactor, or wrap legacy components
   - Automate migration logic (import paths, prop updates, flag wrapping)

2. **Feature Flag Framework**
   - **Local POC**: React Context + localStorage
   - **Enterprise**: LaunchDarkly, Split.io, or ConfigCat (remote control, segmentation, kill switches)

3. **Testing Automation**
   - Integrate unit test generators/templates into dev CLI
   - Pre-wire Jest + React Testing Library to reduce test setup time

4. **Storybook Automation**
   - Scaffold visual components into Storybook with default states
   - Allow Design/QA to validate without full page migration

---

### Slide 4: Cross-Team Collaboration
| Role       | Contribution |
|------------|--------------|
| **Product** | Define MVP vs Final expectations per component, flag usage for beta/rollout |
| **Design**  | Provide MVP-ready design specs and collaborate on visual QA |
| **Content** | Flag content-rich templates in Contentful, enable safe targeting |
| **Developers** | Refactor legacy logic, implement flag conditions, set up unit/storybook tests |
| **QA**      | Validate both MVP and final versions under flag scenarios, create repeatable test plans |

---

### Slide 5: Before vs After – Business Benefits
| Area       | Before (Big Releases)       | After (Flag-Based Micro Releases)         |
|------------|-----------------------------|-------------------------------------------|
| Efficiency | QA + Dev blocked for weeks  | MVP launched early, iterations in parallel |
| Quality    | QA bottlenecks, fragile UIs | Scoped, reliable feature-based testing     |
| Cost       | More QA & dev hours         | Less rework, better alignment              |
| Risk       | Rollbacks require hotfixes  | Toggle flag instantly                      |
| Team Flow  | Cross-team dependencies     | Parallel ownership, faster unblock         |

---

### Slide 6: Cost & Dependencies Comparison
| Tool            | Type         | Estimated Annual Cost      | Setup Time   | Vendor Dependency | Use Case                                 |
|------------------|--------------|-----------------------------|--------------|--------------------|-------------------------------------------|
| **Local Flags**  | OSS/Custom   | Free                        | 8–10 weeks   | No                 | MVPs, internal-only use                   |
| **FeatureHub**   | OSS + SaaS   | $2k–$10k (beta SaaS)        | 8–10 weeks   | Partial            | Microservices, config management          |
| **Unleash**      | OSS + SaaS   | $10k–$50k                   | 8–10 weeks   | Optional           | Advanced targeting, self-hostable         |
| **Flipt**        | OSS only     | Free                        | 8–10 weeks   | No                 | GitOps-style workflows, full control      |
| **GrowthBook**   | OSS + SaaS   | $5k–$15k                    | 8–10 weeks   | Partial            | Feature testing, analytics-driven teams   |
| **Flagsmith**    | OSS + SaaS   | $5k–$20k                    | 8–10 weeks   | Optional           | A/B testing, remote config                |
| **Flagd**        | OSS only     | Free                        | 8–10 weeks   | No                 | CLI-based, flexible multi-source setup    |
| **LaunchDarkly** | SaaS only    | $63k–$130k                  | 8–10 weeks   | Yes                | Enterprise-scale rollouts, segmentation   |
| **Split**        | SaaS only    | $36k–$100k+                 | 8–10 weeks   | Yes                | Data-driven releases, alerting, targeting |
| **ConfigCat**    | SaaS only    | $2k–$12k                    | 8–10 weeks   | Yes                | Marketing-friendly UI, user targeting     |
| **CloudBees**    | SaaS only    | $50k–$120k                  | 8–10 weeks   | Yes                | CI/CD integration, GitOps compatibility   |

**Team Dependencies:**
- **Content**: Contentful model setup and testing workflows (1–2 weeks)
- **Design**: MVP-first visuals, final polish iterations (2–4 weeks)
- **QA**: Create test plans for multiple flag states and combinations (ongoing)
- **Dev**: CLI setup, flag integration, SDKs, wrappers, test automation (2–4 weeks)

------------------|--------------|----------------------------------|--------------|--------------------|-------------------------------------------|
| **Local Flags**  | OSS/Custom   | Free                             | 8–10 weeks   | No                 | MVPs, internal-only use                   |
| **FeatureHub**   | OSS + SaaS   | Free (OSS) / $$ (SaaS beta)      | 8–10 weeks   | Partial            | Microservices, config management          |
| **Unleash**      | OSS + SaaS   | Free (OSS) / $$ (SaaS)           | 8–10 weeks   | Optional           | Advanced targeting, self-hostable         |
| **Flipt**        | OSS only     | Free                             | 8–10 weeks   | No                 | GitOps-style workflows, full control      |
| **GrowthBook**   | OSS + SaaS   | Free (OSS) / $ (Affordable SaaS) | 8–10 weeks   | Partial            | Feature testing, analytics-driven teams   |
| **Flagsmith**    | OSS + SaaS   | Free (OSS) / $$                  | 8–10 weeks   | Optional           | A/B testing, remote config                |
| **Flagd**        | OSS only     | Free                             | 8–10 weeks   | No                 | CLI-based, flexible multi-source setup    |
| **LaunchDarkly** | SaaS only    | $$$ ($63k–$130k/year)            | 8–10 weeks   | Yes                | Enterprise-scale rollouts, segmentation   |
| **Split**        | SaaS only    | $$–$$$ ($36k+/year)              | 8–10 weeks   | Yes                | Data-driven releases, alerting, targeting |
| **ConfigCat**    | SaaS only    | $$                               | 8–10 weeks   | Yes                | Marketing-friendly UI, user targeting     |
| **CloudBees**    | SaaS only    | $$$                              | 8–10 weeks   | Yes                | CI/CD integration, GitOps compatibility   |

**Team Dependencies:**
- **Content**: Contentful model setup and testing workflows (1–2 weeks)
- **Design**: MVP-first visuals, final polish iterations (2–4 weeks)
- **QA**: Create test plans for multiple flag states and combinations (ongoing)
- **Dev**: CLI setup, flag integration, SDKs, wrappers, test automation (2–4 weeks)

---------------------------|-------------------------------------------|---------------|----------------|--------------------|-----------------------------------|
| **Local Flags**           | Free (localStorage + React Context)      | 8–10 weeks    | Low            | None               | MVPs, internal-only rollouts       |
| **LaunchDarkly**          | $$$ ($63k–$130k/year, enterprise tier)   | 8–10 weeks    | Medium         | Yes                | Enterprise-scale rollout & A/B     |
| **Split.io / ConfigCat**  | $$–$$$ ($36k+/year, tiered pricing)      | 8–10 weeks    | Medium         | Yes                | Controlled rollouts & experiments  |

**Team Dependencies:**
- **Content**: Flag-driven Contentful model setup (1–2 weeks)
- **Design**: MVP visual handoffs and iterations (2–4 weeks)
- **QA**: Regression test matrix for multiple flag states (ongoing)
- **Dev**: CLI tools, wrappers, SDKs, and integration logic (2–4 weeks)

-----------------------|------------------------------------------|---------------|----------------|--------------------|-------------------------------|
| **Local Flags**       | Free (localStorage + React Context)     | 8–10 weeks    | Low            | None               | MVPs, internal testing, pilots |
| **LaunchDarkly**      | $$$ (Enterprise license: $63k–$130k/yr) | 8–10 weeks    | Medium         | Yes                | Full-scale prod rollout        |
| **Split.io / ConfigCat** | $$–$$$ (Tiered pricing: $36k+/yr)     | 8–10 weeks    | Medium         | Yes                | Experiments + multi-team scale |

**Team Dependencies:**
- **Content**: Setup Contentful integration and flag-driven models (1–2 weeks)
- **Design**: Final/MVP handoffs, iterative visual QA cycles (2–4 weeks depending on complexity)
- **QA**: Write test matrix per flag state, regression testing, visual diffing (ongoing)
- **Dev**: CLI automation, flag integration, legacy wrappers, SDK setup (2–4 weeks depending on tooling)

------------------|----------------------|---------------|----------------|--------------------|--------------------------|
| **Local Flags**   | Free (localStorage + React Context) | 1 week        | Low              | None               | Internal MVPs, early dev |
| **LaunchDarkly**  | $$$ (Enterprise license) | 1–2 weeks      | Medium           | Yes                | Prod-ready, gradual rollout |
| **Split.io / ConfigCat** | $$–$$$ (Tiered pricing) | 1–2 weeks      | Medium           | Yes                | Mid-size orgs, scalable flag management |

**Team Dependencies:**
- Content: Setup in Contentful models (1–2 days)
- Design: Final/MVP handoffs and visuals (1–2 weeks of sync work)
- QA: Regression test planning and scenario validation (ongoing)
- Dev: Initial infra setup, CLI automation, codemods (1–2 weeks)

---

### Slide 7: My Action Plan
- Set up hybrid flag system: local dev + LaunchDarkly-ready architecture
- Build CLI codemods to wrap legacy components with flags
- Automate unit test + Storybook scaffolding per migrated component
- Work with product to define MVP baseline for complex UIs
- Train developers on creating testable, flag-friendly components
- Collaborate with QA to create test coverage matrix by flag
- Track rollout status and clean up legacy logic post-migration

---

