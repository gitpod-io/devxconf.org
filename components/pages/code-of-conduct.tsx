import Layout from '@components/layout';
import TextWrapper from '@components/text-wrapper';

const CodeOfConduct = () => (
  <Layout>
    <TextWrapper>
      <h1 className="heading-secondary">Code of Conduct</h1>
      <h2 className="heading-tertiary">Our Pledge</h2>
      <p>
        We as organisers, contributors, and leaders pledge to make participation in our community a
        harassment-free experience for everyone, regardless of age, body size, visible or invisible
        disability, ethnicity, sex characteristics, gender identity and expression, level of
        experience, education, socio-economic status, nationality, personal appearance, race,
        religion, or sexual identity and orientation.
      </p>
      <p>
        We pledge to act and interact in ways that contribute to an open, welcoming, diverse,
        inclusive, and healthy community.
      </p>
      <h2 className="heading-tertiary">Our Standards</h2>
      <p>
        Examples of behavior that contributes to a positive environment for our community include:
      </p>
      <ul className="dashed-list">
        <li>Demonstrating empathy and kindness toward other people</li>
        <li>Being respectful of differing opinions, viewpoints, and experiences</li>
        <li>Giving and gracefully accepting constructive feedback</li>
        <li>
          Accepting responsibility and apologizing to those affected by our mistakes, and learning
          from the experience
        </li>
        <li>
          Focusing on what is best not just for us as individuals, but for the overall community
        </li>
      </ul>
      <p>Examples of unacceptable behavior include:</p>
      <ul className="dashed-list">
        <li>
          The use of sexualized language or imagery, and sexual attention or advances of any kind
        </li>
        <li>Trolling, insulting or derogatory comments, and personal or political attacks</li>
        <li>Public or private harassment</li>
        <li>
          Publishing others' private information, such as a physical or email address, without their
          explicit permission
        </li>
        <li>
          Other conduct which could reasonably be considered inappropriate in a professional setting
        </li>
      </ul>
      <h2 className="heading-tertiary">Enforcement Responsibilities</h2>
      <p>
        Community leaders are responsible for clarifying and enforcing our standards of acceptable
        behavior and will take appropriate and fair corrective action in response to any behavior
        that they deem inappropriate, threatening, offensive, or harmful.
      </p>
      <p>
        Community leaders have the right and responsibility to remove, edit, or reject comments,
        commits, code, wiki edits, issues, and other contributions that are not aligned to this Code
        of Conduct, and will communicate reasons for moderation decisions when appropriate.
      </p>
      <h2 className="heading-tertiary">Scope</h2>
      <p>
        This Code of Conduct applies within all community spaces, and also applies when an
        individual is officially representing the community in public spaces. Examples of
        representing our community include using an official e-mail address, posting via an official
        social media account, or acting as an appointed representative at an online or offline
        event.
      </p>
      <h2>Enforcement</h2>
      <p>
        Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the
        community leaders responsible for enforcement at contact@confxconf.org. All complaints will
        be reviewed and investigated promptly and fairly.
      </p>
      <p>
        All community leaders are obligated to respect the privacy and security of the reporter of
        any incident.
      </p>
      <h2>Enforcement Guidelines</h2>
      <p>
        Community leaders will follow these Community Impact Guidelines in determining the
        consequences for any action they deem in violation of this Code of Conduct:
      </p>
      <h4>1. Correction</h4>
      <p>
        Community Impact: Use of inappropriate language or other behavior deemed unprofessional or
        unwelcome in the community.
      </p>
      <p>
        Consequence: A private, written warning from community leaders, providing clarity around the
        nature of the violation and an explanation of why the behavior was inappropriate. A public
        apology may be requested.
      </p>

      <h4>2. Warning</h4>
      <p>Community Impact: A violation through a single incident or series of actions.</p>
      <p>
        Consequence: A warning with consequences for continued behavior. No interaction with the
        people involved, including unsolicited interaction with those enforcing the Code of Conduct,
        for a specified period of time. This includes avoiding interactions in community spaces as
        well as external channels like social media. Violating these terms may lead to a temporary
        or permanent ban.
      </p>

      <h4>3. Temporary Ban</h4>
      <p>
        Community Impact: A serious violation of community standards, including sustained
        inappropriate behavior.
      </p>
      <p>
        Consequence: A temporary ban from any sort of interaction or public communication with the
        community for a specified period of time. No public or private interaction with the people
        involved, including unsolicited interaction with those enforcing the Code of Conduct, is
        allowed during this period. Violating these terms may lead to a permanent ban.
      </p>

      <h4>4. Permanent Ban</h4>
      <p>
        Community Impact: Demonstrating a pattern of violation of community standards, including
        sustained inappropriate behavior, harassment of an individual, or aggression toward or
        disparagement of classes of individuals.
      </p>
      <p>Consequence: A permanent ban from any sort of public interaction within the community.</p>

      <h4>Attribution</h4>
      <p>
        This Code of Conduct is adapted from the Contributor Covenant, version 2.0, available at{' '}
        <br />
        <a href="https://www.contributor-covenant.org/version/2/0/code_of_conduct.html" target="_blank">
          {' '}
          <strong>https://www.contributor-covenant.org/version/2/0/code_of_conduct.html</strong>
        </a>
        .
      </p>
      <p>
        Community Impact Guidelines were inspired by Mozilla's code of conduct enforcement ladder.
      </p>

      <p>
        For answers to common questions about this code of conduct, see the FAQ at{' '}
        <a href="https://www.contributor-covenant.org/faq" target="_blank"><strong>https://www.contributor-covenant.org/faq</strong></a>. Translations are available at{' '}
        <a href="https://www.contributor-covenant.org/translations" target="_blank"><strong>https://www.contributor-covenant.org/translations</strong></a>.
      </p>
    </TextWrapper>
  </Layout>
);

export default CodeOfConduct;
