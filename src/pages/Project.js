import ex1 from "../example1.png"
import ex2 from "../example2.png"
import ex3 from "../example3.png"
import ex4 from "../example4.png"

export default function Pricing() {
  return (
    <>
      <h2>What is Stable Diffusion?</h2>
      <h4>
        A text-to-image model using deep learning is called Stable Diffusion.
        Although it can be used for various tasks including inpainting,
        outpainting, and creating image-to-image translations directed by text
        prompts, its primary usage is to generate detailed visuals conditioned
        on text descriptions.
      </h4>
      <h2>Image Modification</h2>
      <h4>
        A second sampling script called "img2img" is included in Stable
        Diffusion. It takes a text prompt, a path to an existing image, and a
        strength value between 0.0 and 1.0. It then outputs a new image based on
        the original image that also contains the elements from the text prompt.
        The strength value indicates how much noise is added to the output
        image; a higher value produces images with more variation, but they
        might not be semantically consistent with the prompt provided.
      </h4>
      <h2>What Will We Do?</h2>
      <h4>
        We will create an application & tool that uses deep learning and
        artificial intelligence, which creates a design idea for the use of
        designers by using stable diffusion together with a model of pre-trained
        open-source data. While doing this, we will work on adding various
        features by going beyond what has been done. Stable Diffusion will
        reveal very creative ideas and images for designers. In this way, we
        will give designers a new perspective.
      </h4>
      <h2>Examples</h2>
      <h6></h6>
      <img src={ex1} alt="ex"width="200px"></img>
      <img src={ex2} alt="ex"width="200px"></img>
      <img src={ex3} alt="ex"width="200px"></img>
      <img src={ex4} alt="ex"width="200px"></img>
    </>
  );
}
