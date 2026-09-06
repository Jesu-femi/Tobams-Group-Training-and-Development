import FeatureBlock from "./FeatureBlock";

const corporateBullets = [
  "Leadership Training",
  "Strategic Planning and Implementation",
  "Project Management",
  "Sustainability Training",
  "Customised Training",
];

const individualBullets = [
  "Leadership Development",
  "Soft Skills Development",
  "Industry Specific Knowledge",
  "Technical Skills Enhancement",
  "Time Management and Productivity",
  "Career Development",
];

const capacityBullets = [
  "Tailored Training Programs",
  "Expert-Led Workshops",
  "Personalized Mentorship",
  "Technical Skills Enhancement",
  "Collaborative Learning Environment",
  "Ongoing Support and Resources",
];

export default function TrainingPrograms() {
  return (
    <section className="flex flex-col items-center gap-20 px-6 py-16 md:px-16 lg:py-28">
      <FeatureBlock
        title="Corporate Trainings"
        description="Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values."
        bullets={corporateBullets}
        imageAlt="A facilitator leading a corporate training session with a group of employees"
        imagePosition="right"
      />
      <FeatureBlock
        title="Personalised Individual Training"
        description="Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals."
        bullets={individualBullets}
        imageAlt="A woman attentively participating in a training workshop"
      />
      <FeatureBlock
        title="Capacity Development"
        description="At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth."
        bullets={capacityBullets}
        imageAlt="A trainer presenting charts on a flip chart to colleagues in an office"
        imagePosition="right"
      />
    </section>
  );
}