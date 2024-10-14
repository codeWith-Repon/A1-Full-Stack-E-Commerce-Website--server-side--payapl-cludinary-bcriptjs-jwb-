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

module.exports = { addFeatureImage, getFeatureImage };
