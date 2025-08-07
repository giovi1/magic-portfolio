import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema, Icon } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          {home.featured.display && (
          <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
            <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
              href={home.featured.href}>
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <Column fillWidth gap="l" paddingBottom="32">
            <RevealFx translateY="12" delay={0.3} fillWidth horizontal="start">
              <Heading as="h2" variant="display-strong-s">
                {home.latestNews.title}
              </Heading>
            </RevealFx>
            {home.news.map((item, index) => (
              <RevealFx key={index} translateY="12" delay={0.3 + index * 0.1} fillWidth horizontal="start">
                <Flex
                  direction="column"
                  gap="m"
                  padding="l"
                  background="brand-alpha-weak"
                  border="brand-alpha-medium"
                  radius="l"
                >
                  <Flex vertical="center" gap="m">
                    <Icon name={item.icon} size="m" onBackground="neutral-strong" />
                    <Heading as="h3" variant="heading-strong-m">
                      {item.title}
                    </Heading>
                  </Flex>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {item.description}
                  </Text>
                  {item.button.display && (
                    <Flex horizontal="start" paddingTop="m">
                      <Button
                        href={item.button.href}
                        variant="secondary"
                        size="m"
                        weight="default"
                        arrowIcon
                      >
                        {item.button.label}
                      </Button>
                    </Flex>
                  )}
                </Flex>
              </RevealFx>
            ))}
          </Column>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
