import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export default function ContactEmail({
  name,
  email,
  phone,
  company,
  projectType,
  budget,
  message,
}) {
  return (
    <Html>
      <Head />
      <Preview>New Project Enquiry from {name}</Preview>

      <Body
        style={{
          backgroundColor: "#f6f9fc",
          fontFamily: "Arial, sans-serif",
          padding: "30px 0",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "40px",
            maxWidth: "620px",
            margin: "0 auto",
          }}
        >
          <Heading
            style={{
              color: "#2563eb",
              marginBottom: "10px",
            }}
          >
            🚀 New Project Enquiry
          </Heading>

          <Text style={{ color: "#555", fontSize: "16px" }}>
            A new enquiry has been submitted through the Aptechnosys website.
          </Text>

          <Hr />

          <Section>
            <Text><strong>👤 Name:</strong> {name}</Text>
            <Text><strong>📧 Email:</strong> {email}</Text>
            <Text><strong>📱 Phone:</strong> {phone}</Text>
            <Text><strong>🏢 Company:</strong> {company || "N/A"}</Text>
            <Text><strong>💼 Project Type:</strong> {projectType}</Text>
            <Text><strong>💰 Budget:</strong> {budget}</Text>
          </Section>

          <Hr />

          <Heading
            as="h3"
            style={{
              fontSize: "20px",
              marginBottom: "12px",
            }}
          >
            Project Details
          </Heading>

          <Text
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: "26px",
              color: "#444",
            }}
          >
            {message}
          </Text>

          <Hr />

          <Text
            style={{
              color: "#888",
              fontSize: "13px",
              marginTop: "30px",
            }}
          >
            This email was automatically generated from the Aptechnosys contact
            form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}