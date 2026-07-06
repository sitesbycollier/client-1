const files = import.meta.glob(
  "/src/assets/projects/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    import: "default",
  }
);

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  images: ProjectImage[];
};

const imagesByProject: Record<string, ProjectImage[]> = {};

Object.entries(files).forEach(([path, src]) => {
  const match = path.match(/projects\/([^/]+)\/([^/]+)$/);

  if (!match) return;

  const [, project, filename] = match;

  imagesByProject[project] ??= [];

  imagesByProject[project].push({
    src: src as string,
    alt: filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
  });
});

Object.values(imagesByProject).forEach((images) =>
  images.sort((a, b) => a.src.localeCompare(b.src))
);

export const projects: Project[] = [
  {
    id: "stump-lane",
    title: "Stump Lane",
    subtitle: "Key West, FL",
    images: imagesByProject["stump-lane"] ?? [],
  },
  {
    id: "mount-riante",
    title: "Mount Riante",
    subtitle: "Hot Springs, AR",
    images: imagesByProject["mount-riante"] ?? [],
  },
  {
    id: "the-lacala",
    title: "The LaCala",
    subtitle: "Key West, FL",
    images: imagesByProject["the-lacala"] ?? [],
  },
  {
    id: "stonegate-point",
    title: "Stonegate Point",
    subtitle: "Hot Springs, AR",
    images: imagesByProject["stonegate-point"] ?? [],
  },
  {
    id: "poverty-point",
    title: "Poverty Point",
    subtitle: "Hot Springs, AR",
    images: imagesByProject["poverty-point"] ?? [],
  },
];