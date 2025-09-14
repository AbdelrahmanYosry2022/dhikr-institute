declare module "*.module.css" {
  const classes: { [key: string]: string }
  export default classes
}
declare module "*.css" {
  const classes: { [key: string]: string }
  export default classes
}
// Explicit module names for stricter resolvers
declare module "./pages/home/sections/team/team-card-carousel.module.css" {
  const classes: { [key: string]: string }
  export default classes
}
declare module "./styles/momentum-gallery.module.css" {
  const classes: { [key: string]: string }
  export default classes
}
declare module "@/pages/home/sections/team/team-card-carousel.module.css" {
  const classes: { [key: string]: string }
  export default classes
}
declare module "@/styles/momentum-gallery.module.css" {
  const classes: { [key: string]: string }
  export default classes
}