const Feature = require("../../models/Feature");

const addFeatureImage = async (req, res) => {
  try {
    const { image } = req.body;

    const featureImages = new Feature({
      image,
    });

    await featureImages.save();

    res.status(201).json({
      success: true,
      data: featureImages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured!!!",
    });
  }
};

const getFeatureImage = async (req, res) => {
  try {
    const iamges = await Feature.find({});

    res.status(200).json({
      success: true,
      data: iamges,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured!!!",
    });
  }
};


const deleteFeatureImage = async (req, res) => {
  try {
    const { id } = req.params;
    const featureImage = await Feature.findByIdAndDelete(id);
    if (!featureImage)
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });

    res.status(200).json({
      success: true,
      message: "Product delete successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};

module.exports = { addFeatureImage, getFeatureImage,deleteFeatureImage };
