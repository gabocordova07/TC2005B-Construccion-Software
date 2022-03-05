using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class ScoreManager : MonoBehaviour
{
    public Text scoreText;
    int score = 0;
    // Start is called before the first frame update
    void Start()
    {
        scoreText.text = score.ToString() + " Points";
    }
    public void addPoint()
    {
        score += 1;
        scoreText.text = score.ToString() + " Points";
    }
    // Adds five points to the score
    public void addFivePoints()
    {
        score += 5;
        scoreText.text = score.ToString() + " Points";
    }
    // Removes one point form the score
    public void removePoint()
    {
        score -= 1;
        scoreText.text = score.ToString() + " Points";
    }
}
