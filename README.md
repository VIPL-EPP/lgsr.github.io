# LGSR Project Page

Official project page for **Improving Policy Learning via Language-Guided State Representation in World Models**, accepted by *IEEE Robotics and Automation Letters* in July 2026.

- [Project page](https://zhanglixuan0720.github.io/lgsr.github.io/)
- [Paper](static/pdfs/lgsr-paper.pdf)
- [Code](https://github.com/zhanglixuan0720/LGSR)

## About

LGSR uses language instructions to guide compact, task-relevant state representations in world models for long-horizon robotic policy learning. The project page presents the method, CALVIN and LIBERO-Long results, representation analyses, and supplementary experiments.

## Local preview

The site is static and has no build step. From the repository root, run:

```bash
python3 -m http.server 8000
```

Then open <http://127.0.0.1:8000/>.

## Repository structure

- `index.html`: page content and metadata.
- `static/css/`: page and framework styles.
- `static/js/`: navigation and citation interactions.
- `static/images/`: paper figures, supplementary visualizations, and favicons.
- `static/pdfs/`: accepted manuscript.

## Deployment

The repository is published directly with GitHub Pages. All runtime assets are stored locally, so deployment does not require package installation or a build command.

## Acknowledgments

The presentation is inspired by the [Nerfies](https://nerfies.github.io/) and [VGGT](https://vgg-t.github.io/) project pages and is adapted from the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template).

## Website license

The project-page code is distributed under the [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).
