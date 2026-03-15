import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4 md:px-12 py-20"
      >
        <div className="max-w-3xl w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Building Products That Scale
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I'm a Senior Software Engineer at Meta with expertise in building and scaling 
            products that drive business impact. My work spans from shipping 0-to-1 products 
            to leading cross-functional teams and designing A/B testing frameworks that power 
            data-driven decisions.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button
              variant="default"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get in Touch
                <Mail size={18} />
              </a>
            </Button>
            <Button variant="outline">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                GitHub
                <Github size={18} />
              </a>
            </Button>
            <Button variant="outline">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                LinkedIn
                <Linkedin size={18} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center px-4 md:px-12 py-20 border-t border-border"
      >
        <div className="max-w-3xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            Experience
          </h2>

          <div className="space-y-12">
            {/* Meta Role 1 */}
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold text-foreground">
                Senior Software Engineer
              </h3>
              <p className="text-accent text-lg font-semibold mt-1">
                Meta (Facebook) • 2020 - Present
              </p>
              <div className="mt-4 space-y-3 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Live Video Ads (2025 - Present):</strong> Drove the 
                  marketplace ads workstream to deliver a 0-to-1 live video ads product. Led technical integrations 
                  with top Southeast Asia e-commerce partners. Sized adoption trajectory and set success metrics with 
                  data scientists. Architected an AI oncall agent to automate recurring tasks and mentored 3 engineers.
                </p>
                <p>
                  <strong className="text-foreground">Business Messaging Outcomes (2022-2024):</strong> Led a 
                  7-engineer workstream building ML-detected messaging outcomes across Meta Business Suite, 
                  Instagram, and Messenger. Drove cross-functional collaboration with design and privacy teams. 
                  Built the Messenger and Instagram Business Inbox labeling system, enabling businesses to organize 
                  customer interactions.
                </p>
                <p>
                  <strong className="text-foreground">Business Notification Platform (2020-2022):</strong> 
                  Revamped notification creation and testing interface into a streamlined workflow. Designed and ran 
                  30+ content experiments across major business-facing notifications. Structured a comprehensive 
                  knowledge library and partnered with technical documentation team to enable self-serve troubleshooting.
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="min-h-screen flex items-center justify-center px-4 md:px-12 py-20 border-t border-border"
      >
        <div className="max-w-3xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            Education
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold text-foreground">
                BEng in Computer Engineering
              </h3>
              <p className="text-accent text-lg font-semibold mt-1">
                National University of Singapore (NUS) • 2016-2020
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-foreground">GPA:</strong> 4.93/5.00 (Rank 2/493)
                </p>
                <p className="text-sm">
                  <strong className="text-foreground">Honors & Awards:</strong> Halbrecht Associates Prize, 
                  Alcatel-Lucent Telecommunications Prize, IEEE-Eta Kappa Nu Member, PwC Prize for 
                  Whole Leadership, NUS Dean's List
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section
        id="research"
        className="min-h-screen flex items-center justify-center px-4 md:px-12 py-20 border-t border-border"
      >
        <div className="max-w-3xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            Research & Publications
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold text-foreground">
                Towards Natural and Accurate Future Motion Prediction of Humans and Animals
              </h3>
              <p className="text-accent text-lg font-semibold mt-2">
                CVPR 2019
              </p>
              <p className="text-muted-foreground mt-4">
                <strong className="text-foreground">Advisor:</strong> Prof Li Cheng, 
                Machine Learning for Bioimage Analysis Group
              </p>
              <p className="text-muted-foreground mt-3">
                Built a hierarchical RNN that captures both local and global motion contexts 
                through multi-level state hierarchy, integrated Lie algebra skeletal representation 
                to explicitly encode anatomical constraints. Enables stable, natural-looking 3D 
                pose forecasting for over 50 seconds, overcoming the common "motionless state" 
                decay found in standard LSTMs and GRUs.
              </p>
              <div className="mt-4">
                <Button variant="outline" size="sm">
                  <a
                    href="https://openaccess.thecvf.com/content_CVPR_2019/papers/Jain_Structural-RNN_Deep_Learning_on_Spatio-Temporal_Graphs_CVPR_2019_paper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Read Paper
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Skills Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 md:px-12 py-20 border-t border-border"
      >
        <div className="max-w-3xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            Product & Growth Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Product Strategy & Roadmapping",
                description:
                  "Sizing adoption trajectories, setting success metrics, and shaping product roadmaps aligned with business goals",
              },
              {
                title: "Cross-Functional Leadership",
                description:
                  "Leading teams across engineering, design, data science, and privacy to ship products at scale",
              },
              {
                title: "A/B Testing & Experimentation",
                description:
                  "Designing and running experiments to optimize product adoption, engagement, and user experience across features",
              },
              {
                title: "AI-Native Skills",
                description:
                  "Leveraging AI tools including MyClaw agents and Claude Code to optimize workflow, automate recurring tasks, and improve team productivity",
              },
            ].map((skill) => (
              <div
                key={skill.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 md:px-12 py-20 border-t border-border"
      >
        <div className="max-w-3xl w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm always interested in discussing product strategy, building teams, and 
            exploring new opportunities. Feel free to reach out!
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <a href="mailto:shuyuanj12@gmail.com" className="flex items-center gap-2">
                Email Me
                <Mail size={20} />
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                LinkedIn
                <Linkedin size={20} />
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                GitHub
                <Github size={20} />
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-12">
            © 2026 Shuyuan Jin. Built with React, Tailwind CSS, and a focus on building great products.
          </p>
        </div>
      </section>
    </div>
  );
}
