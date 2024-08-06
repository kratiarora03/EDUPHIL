const loginUser = async (req, res) => {
    const { StudentId, Password } = req.body;
  
    try {
      // Find user by StudentId
      const user = await User.findOne({ StudentId });
      if (!user) return res.status(400).json({ success: false, message: 'User not found' });
  
      // Compare password
      const isMatch = await bcrypt.compare(Password, user.Password);
      if (!isMatch) return res.status(400).json({ success: false, message: 'Invalid credentials' });
  
      // Generate JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ success: true, token });
    } catch (err) {
      console.error('Error during login:', err); // Log detailed error
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };
  module.exports = { loginUser };  