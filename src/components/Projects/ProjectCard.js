import {
    Divider,
    Stack,
    Text,
    Container,
    Card,
    CardBody,
    Image,
    Heading,
    Badge,
    Link,
    Center,
  } from "@chakra-ui/react";

export function ProjectCard(props) {
    const {title, img, description, link} = props;
    return (
    <Card
        key={title}
        direction={{
          base: "column",
        }}
        overflow="hidden"
      >
        {img === "" ? null : <Image objectFit="cover" w="100%" h={400} src={img} />}
        <Stack>
          <CardBody align="left">
            <Heading size="md">{title}</Heading>
            <Text py={2}>{description}</Text>

            {/* <HStack py={2}>
              {project.buttons.map((button) => (
                <a key={button.text} href={button.href}>
                  <Button color={`${color}.400`}>
                    {button.text}
                  </Button>
                </a>
              ))}
            </HStack>
            <HStack pt={4} spacing={2}>
              {project.badges.map((badge) => (
                <Badge
                  key={badge.text}
                  colorScheme={badge.colorScheme}
                >
                  {badge.text}
                </Badge>
              ))}
            </HStack> */}
          </CardBody>
        </Stack>
      </Card>
      )
}